import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Leo Lai</div>
      <div className={styles.text}>
        Last Updated: 03/09/2024
      </div>
    </div>
  );
};

export default Footer;