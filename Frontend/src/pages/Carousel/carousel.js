import React from "react";
import { useState, useRef } from "react";
import { Carousel } from "react-responsive-3d-carousel";
import "react-responsive-3d-carousel/dist/styles.css";
import styles from "./car.module.css";

function Carousel3DComponent() {
  const [autoplay, setAutoplay] = useState(true);
  const [numOfSlides, setNumOfSlides] = useState("3");
  const [isTiny, setIsTiny] = useState(false); // small-screen fallback flag
  const [tinyIndex, setTinyIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchDeltaX = useRef(0);

  // Moved testimonials above effects to avoid temporal dead zone access
  const testimonials = [
    {
      text: "Being a Campus Ambassador has been a truly enriching experience it helped me enhance my leadership and communication skills, connect with inspiring peers, and gain exposure to exciting opportunities. I'm grateful for this platform and I believe this program will continue to provide amazing opportunities for many more students in the future, just as it has for me.",
      name: "Kartik Rawat",
      college: "Y.B Patil Polytechnic Akurdi",
      location: "Pune, Maharashtra"
    },
    {
      text: "Serving as a two-time Campus Ambassador for Team Kshitij and IIT Kharagpur has been a truly transformative experience, and being recognized among the Top 50 Campus Ambassadors across India has been the highlight of this journey. This program is more than just a title or name but it's a hands-on learning experience that goes beyond the classroom.",
      name: "Sarvesh Soumil",
      college: "Swami Vivekananda University",
      location: "Kolkata, West Bengal"
    },
    {
      text: "The Campus Ambassador journey with Kshitij, IIT Kharagpur, allowed me to connect with like-minded peers, build leadership qualities, and promote innovation-driven initiatives. It was a proud moment to be recognized among the Top 10 CAs. Thank you entire Kshitij Team.",
      name: "Kishan Bhandari",
      college: "Haldia Institute of Technology",
      location: "Haldia, West Bengal"
    },
    {
      text: "Thanks for the recognition. As a CA for the last two years it has been a great experience enhancing my leadership skills as well as event management skills. All the events were great and the nights of Kshitij were memorable. Overall it was a great experience...",
      name: "Ashwini Kumar Khatua",
      college: "GITA Autonomous College",
      location: "Bhubaneswar, Odisha"
    },
    {
      text: "Being a Campus Ambassador has been an immensely gratifying journey. I cherished engaging with peers, cultivating new skills, and immersing myself in a vibrant community. The program profoundly enhanced my confidence, broadened my perspective, and fostered invaluable connections.",
      name: "Vibhak Pratap Singh",
      college: "Srinix College of Engineering",
      location: "Balasore, Odisha"
    },
    {
      text: "Being selected among the top 50 Campus Ambassadors is a proud achievement for me. This recognition has boosted my confidence and inspired me to contribute more actively to our campus. The journey has enriched my leadership and communication skills.",
      name: "Satya Ranjan Mohanty",
      college: "Srinix College of Engineering",
      location: "Balasore, Odisha"
    }
  ];

  // Responsive carousel settings
  React.useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      // Use a slightly higher threshold (420) to catch devices reporting fractional widths
      if (w <= 420) {
        setIsTiny(true);
        setNumOfSlides("1");
      } else {
        setIsTiny(false);
        if (w <= 768) setNumOfSlides("1");
        else if (w <= 1024) setNumOfSlides("2");
        else setNumOfSlides("3");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Autoplay for tiny mode
  React.useEffect(() => {
    if (!isTiny) return;
    const id = setInterval(() => {
      setTinyIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(id);
  }, [isTiny]);

  // Touch / swipe handlers for tiny fallback
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };
  const onTouchMove = (e) => {
    if (touchStartX.current == null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };
  const onTouchEnd = () => {
    if (touchStartX.current == null) return;
    const threshold = 40; // px
    if (touchDeltaX.current > threshold) {
      handlePrevTiny();
    } else if (touchDeltaX.current < -threshold) {
      handleNextTiny();
    }
    touchStartX.current = null;
    touchDeltaX.current = 0;
  };

  const handlePrevTiny = () => {
    setTinyIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  const handleNextTiny = () => {
    setTinyIndex((prev) => (prev + 1) % testimonials.length);
  };


  const items = testimonials.map((testimonial, index) => (
    <div
      key={index}
      className={styles.testimonialContainer}
      role="group"
      aria-roledescription="slide"
      aria-label={`Testimonial ${index + 1} of ${testimonials.length}`}
    >
      <div className={styles.testimonialContent}>
        <div className={styles.quoteIcon}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ff3131" width="30" height="30">
            <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 17.5 10z"/>
          </svg>
        </div>
        <div className={styles.testimonialText}>
          <p>{testimonial.text}</p>
        </div>
        <div className={styles.testimonialAuthor}>
          <div className={styles.authorName}>CA - {testimonial.name}</div>
          <div className={styles.authorCollege}>{testimonial.college}</div>
          <div className={styles.authorLocation}>{testimonial.location}</div>
        </div>
      </div>
    </div>
  ));
  return (
    <div className={styles.carouselContainer}>
      <h2 className={styles.heading}>TESTIMONIALS</h2>
      {isTiny ? (
        <div
          className={styles.tinyCarouselWrapper}
          tabIndex={0}
          aria-roledescription="carousel"
          aria-label="Testimonials carousel"
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') handlePrevTiny();
            if (e.key === 'ArrowRight') handleNextTiny();
          }}
        >
          <div className={styles.tinySlideOuter}>
            <button
              aria-label="Previous testimonial"
              className={`${styles.tinySideArrow} ${styles.tinySideArrowLeft}`}
              type="button"
              onClick={handlePrevTiny}
            >
              <span>&lt;</span>
            </button>
            <div
              className={styles.tinySlideTrack}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {items[tinyIndex]}
            </div>
            <button
              aria-label="Next testimonial"
              className={`${styles.tinySideArrow} ${styles.tinySideArrowRight}`}
              type="button"
              onClick={handleNextTiny}
            >
              <span>&gt;</span>
            </button>
          </div>
          <div className={styles.tinyDots} role="tablist">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={i === tinyIndex ? styles.tinyDotActive : styles.tinyDot}
                onClick={() => setTinyIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                role="tab"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setTinyIndex(i);
                }}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className={styles.carousel3dcompCont}>
          <Carousel
            showStatus={false}
            containerWidth="100%"
            perspectiveOrigin="center"
            defaultOption={{ numOfSlides: numOfSlides, depthFactor: 0.8 }}
            pauseOnHover={true}
            items={items}
            startIndex={0}
            swipeable={true}
            swipeDirection="horizontal"
            autoPlay={autoplay}
            showArrows={true}
            arrows={{ color: "#ff3131", hoverColor: "#cc2929" }}
            indicators={{
              width: "0.7rem",
              height: "0.7rem",
              color: "#ffffff",
              activeColor: "#ff3131",
            }}
          />
        </div>
      )}
    </div>
  );
}
export default Carousel3DComponent;
