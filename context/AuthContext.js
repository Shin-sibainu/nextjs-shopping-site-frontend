import { createContext, useState } from "react";
import { useRouter } from "next/router";
import { Magic } from "magic-sdk";
import { MAGIC_PUBLIC_KEY } from "../utils/urls";
import { useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

let magic;

export const AuthProvider = (props) => {
  const [user, setUser] = useState(null);
  // const [user, setUser] = useState({ email: "shincode@gmail.com" });
  const router = useRouter();

  useEffect(() => {
    magic = new Magic(MAGIC_PUBLIC_KEY);
    // const test = async () => {};
    // test();
    // console.log(user);
    checkUserLoggedIn();
  }, []);

  const login = async (email) => {
    try {
      // console.log(email);
      //ユーザー登録
      await axios
        .post("http://localhost:1337/api/auth/local/register", {
          username: email,
          email: email,
          password: email,
        })
        .then((res) => {
          console.log("登録完了！");
          console.log("User profile", res.data.user);
          console.log("User token", res.data.jwt);
          magic.auth.loginWithMagicLink({ email });
          setUser({ email });
        })
        .catch((error) => {
          // Handle error.
          console.log("An error occurred:", error.response);
        });
      router.push("/");
    } catch (err) {
      setUser(null);
    }
    // setUser({ email });
    // router.push("/"); //redirect
  };

  const logout = async () => {
    try {
      await magic.user.logout();
      setUser(null);
      router.push("/");
    } catch (err) {}
  };

  const checkUserLoggedIn = async () => {
    try {
      const isLoggedIn = await magic.user.isLoggedIn();
      if (isLoggedIn) {
        const { email } = await magic.user.getMetadata();
        setUser({ email });
        // const token = await getToken();
        // console.log("user token:" + token);
      }
    } catch (err) {}
  };

  // const getToken = async () => {
  //   try {
  //     const token = await magic.user.getIdToken();
  //     return token;
  //   } catch (err) {}
  // };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
