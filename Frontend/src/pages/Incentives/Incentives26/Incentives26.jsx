import ScrollStack, { ScrollStackItem } from "./Scrollstack.jsx";
import styles from "./Incentives26.module.css";
import ic1 from "./ic1.svg";

function Incentives26() {
  const data = [
    {
      id: 1,
      icon: ic1,
      title: "Certificate of Appreciation",
      description: "Certificate of Appreciation signed by the Chairman, Kshitij IIT Kharagpur and President, Gymkhana IIT Kharagpur after the successful completion of the tenure."
    },
    {
      id: 2,
      icon: ic1,
      title: "All-Access Event Invitations",
      description: "Invitation extended to participate in all events organized and conducted by Kshitij, IIT Kharagpur, providing an opportunity to be a part of the diverse technical, managerial, and cultural experiences curated during the fest."
    },
    {
      id: 3,
      icon: ic1,
      title: "Exclusive Goodies & Hampers",
      description: "Exclusive goodies and hampers presented after the conclusion of the fest as a token of appreciation and remembrance of participation in Kshitij, IIT Kharagpur."
    },
    {
      id: 4,
      icon: ic1,
      title: "Extensive Networking",
      description: "Opportunity for extensive networking with students of IIT Kharagpur as well as peers from premier institutes and diverse colleges across the country, fostering collaboration, exchange of ideas, and long-lasting connections."
    },
    {
      id: 5,
      icon: ic1,
      title: "Social Media Recognition",
      description: "A dedicated feature post will be released on Kshitij's official social media platforms to recognize and announce the Top 10 performing Campus Ambassadors, highlighting their exceptional contributions and achievements."
    }
  ];

  return (
    <div className={styles["incentives26-container"]}>
      <ScrollStack key="incentives-scroll-stack">
        {data.map((item) => (
          <ScrollStackItem key={item.id}>
            <div className={styles.card}>
              <div className={styles.icon}>
                <img src={item.icon} alt="icon" />
              </div>
              <div className={styles.textdiv}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </div>
  );
}

export default Incentives26;