import styles from "./Footer.module.css";
import { FaInstagram, FaArrowRight } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.list}>
        <p>© 2023 Travel Blog. All rights reserved.</p>
        <p>
          Check Ud Mine Sociale Medier <FaArrowRight />
        </p>
      </div>
      <div>
        <a href="https://www.instagram.com/mijam31/" target="_blank">
          <FaInstagram className={styles.instagramIcon} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
