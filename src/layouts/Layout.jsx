import styles from "./Layout.module.css";
import { FaHeart } from "react-icons/fa";

const Layout = ({children}) => {
  return (
    <>
      <header className={styles.header}>
        <p> Countries-Search App | Using Search-Box </p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p> Developed with  <FaHeart color="#6552f4" width="40px" fontSize="0.9rem"/> by sanaz </p>
      </footer>

    </>
  );
}

export default Layout;