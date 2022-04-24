import styles from "../styles/Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerWrapper}>
        <h3 className={styles.headerTitle}>Next.js Shopping</h3>
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
