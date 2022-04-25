import Head from "next/head";
import { useContext } from "react";
import { useState } from "react";
import AuthContext from "../context/AuthContext";

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

      <h2>ログイン</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="メールアドレスを入力"
        />
        <button type="submit">ログイン</button>
      </form>
    </div>
  );
}

export default login;
