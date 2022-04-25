import Link from "next/link";
import styles from "../styles/Header.module.css";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useRouter } from "next/router";

function Header() {
  const { user } = useContext(AuthContext);

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

        <div>
          {user ? (
            <Link href="/account">
              <a>{user.email}</a>
            </Link>
          ) : (
            <Link href="/login">
              <a>ログイン</a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
