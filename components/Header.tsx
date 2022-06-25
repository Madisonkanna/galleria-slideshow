import styles from "../styles/Header.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>galleria</h1>
      <Link href="/listing/1">Start slideshow</Link>
    </div>
  );
};

export default Header;
