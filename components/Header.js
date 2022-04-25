import Link from "next/link";
import styles from "../styles/Header.module.css";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerWrapper}>
        <Link href="/">
          <a>
            <h3 className={styles.headerTitle}>Next.js Shopping</h3>
          </a>
        </Link>
        <ul className={styles.headerUl}>
          <li>
            <a href="#">ホーム</a>
            <a href="#">ショッピング</a>
            <a href="#">詳細</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
