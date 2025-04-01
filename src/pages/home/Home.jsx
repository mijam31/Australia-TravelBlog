import Header from "../../components/header/Header";
import styles from "./Home.module.css";
import Footer from "../../components/footer/Footer";
import Content from "../../components/Content/Content";

const Home = () => {
  return (
    <>
      <Header littleText="Travel Blog" biggerText="14 Dage i Australien" />
      <section className={styles.bubbleContainer}>
        <div className={`${styles.leftCircle} ${styles.circle}`}>
          <img
            src="src\assets\pictures\dag 0-7\sct_mary_cahedral_4.jpg"
            alt=""
          />
        </div>
        <div className={`${styles.rightCircle} ${styles.circle}`}>
          <img src="src\assets\pictures\IMG_1825.jpg" alt="" />
        </div>
      </section>
      <Content />
      <Footer />
    </>
  );
};

export default Home;
