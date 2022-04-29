import Head from "next/head";
import { useContext } from "react";
import { useState } from "react";
import AuthContext from "../context/AuthContext";
import styles from "../styles/Login.module.css";

function login() {
  const [email, setEmail] = useState("");
  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email);
  };

  return (
    <div>
      <Head>
        <title>ログイン</title>
        <meta name="description" content="ログイン用ページです。" />
      </Head>

      <div className={styles.loginWrapper}>
        <h2>ログイン</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            className={styles.input}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="メールアドレスを入力"
          />
          <button type="submit" className={styles.button}>
            ログイン
          </button>
        </form>
      </div>
    </div>
  );
}

export default login;
