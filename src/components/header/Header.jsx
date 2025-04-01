import styles from "./Header.module.css";

const Header = ({ littleText, biggerText }) => {
  return (
    <>
      <section className={styles.color}>
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <h2>{littleText}</h2>
            <h3>{biggerText}</h3>
          </div>
        </header>
      </section>
    </>
  );
};

export default Header;
