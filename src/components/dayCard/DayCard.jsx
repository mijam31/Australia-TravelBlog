import styles from "./DayCard.module.css";

const DayCard = ({ day }) => {
  return (
    <>
      <div className={styles.dayCard}>
        <h2>{day.date}</h2>
        <p className={styles.text1}>{day.part1}</p>
        <div className={styles.dayCardImages}>
          <img className={styles.img1} src={day.image1} alt="" />
          {day.video1 && (
            <video className={styles.img2} autoPlay loop muted>
              <source src={day.video1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          <img className={styles.img2} src={day.image2} alt="" />
          <img className={styles.img3} src={day.image3} alt="" />
        </div>
        <p className={styles.text2}>{day.part2}</p>
      </div>
    </>
  );
};

export default DayCard;
