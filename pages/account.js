import Head from "next/head";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Link from "next/link";

export default function Account() {
  const { user, logout } = useContext(AuthContext);

  if (!user) {
    return (
      <div>
        <p>ログインまたは新規登録をお願いします。</p>
        <Link href="/">
          <a>戻る</a>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Head>
        <title>アカウントページ</title>
        <meta name="description" content="アカウントのページです。" />
      </Head>
      <h2>アカウントページ</h2>
      <a href="#" onClick={logout}>
        ログアウト
      </a>
    </div>
  );
}
