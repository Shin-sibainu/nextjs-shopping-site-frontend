import { createContext, useState } from "react";
import { useRouter } from "next/router";
import { Magic } from "magic-sdk";
import { MAGIC_PUBLIC_KEY } from "../utils/urls";
import { useEffect } from "react";

const AuthContext = createContext();

let magic;

export const AuthProvider = (props) => {
  const [user, setUser] = useState(null);
  // const [user, setUser] = useState({ email: "shincode@gmail.com" });
  const router = useRouter();

  useEffect(() => {
    magic = new Magic(MAGIC_PUBLIC_KEY);
  }, []);

  const login = async (email) => {
    try {
      await magic.auth.loginWithMagicLink({ email });
      setUser({ email });
      router.push("/");
    } catch (err) {
      setUser(null);
    }
    // setUser({ email });
    // router.push("/"); //redirect
  };

  const logout = async () => {
    setUser(null);
    router.push("/");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
