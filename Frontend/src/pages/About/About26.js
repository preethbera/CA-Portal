import { useState, useEffect, useRef } from "react";
import styles from "./about26.module.css";

function About() {
  // Store multiple images here
  const images = [
    "https://i.postimg.cc/KcJ3WMGv/image.png",
    "https://i.postimg.cc/Y9yk6M7k/image.png",
    "https://i.postimg.cc/XXSRLvzM/image.png",
    "https://i.postimg.cc/WtL9hGjB/image.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  // Preload images once
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  // Start auto change
  const startSlideshow = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000); // 3s
  };

  const stopSlideshow = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startSlideshow();
    return () => stopSlideshow();
  }, [images.length]);

  return (
    <div className={styles.container}>
      <div
        className={styles.imageBox}
        onMouseEnter={stopSlideshow}
        onMouseLeave={startSlideshow}
      >
        <img
          src={images[currentIndex]}
          alt="Kshitij IIT Kharagpur"
          className={`${styles.image} ${styles.show}`}
        />

        {/* Dots Navigation */}
        <div className={styles.dots}>
          {images.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${
                currentIndex === index ? styles.activeDot : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>

      <div className={styles.box}>
        <h2 className={styles.heading}>ABOUT US</h2>
        <p className={styles.para}>
          Kshitij, IIT Kharagpur is Asia’s largest Techno-Management Festival.
          Since its inception in 2004, Kshitij has always strived to bring
          students closer to the fields of Technology and Management. The Campus
          Ambassador Program brings an opportunity for all the students across
          the country to be a part of team Kshitij, IIT Kharagpur. The Campus
          Ambassadors act as the backbone of the fest by bridging between
          Kshitij and the students of their respective colleges.
        </p>
        <p className={styles.para}>
          The Campus Ambassador Program is one of the biggest platforms for
          students to engage in serious networking and gain knowledge of
          marketing and social media. More than 70 thousand students from 2000+
          colleges will be under their management. The Campus Ambassador Program
          is structured to help Campus Ambassadors develop their corporate
          personalities and soft skills. The Campus Ambassadors' involvement
          will be essential to the success of Kshitij 2025, the 22nd edition of
          Kshitij.
        </p>
        <div className={styles.num_container}>
          <div className={styles.num_box}>
            <span className={styles.numv}>70k+</span>
            <span className={styles.numd}>Footfall of Students</span>
          </div>
          <div className={styles.num_box}>
            <span className={styles.numv}>2000+</span>
            <span className={styles.numd}>Colleges across India</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
