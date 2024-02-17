import styles from "./Layout.module.css";
import { FaHeart } from "react-icons/fa";

const Layout = ({children}) => {
  return (
    <>
      <header className={styles.header}>
        <p> Countries-List App | Using Search-Box </p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p> Developed with  <FaHeart color="red"/> by sanaz </p>
      </footer>

    </>
  );
}

export default Layout;