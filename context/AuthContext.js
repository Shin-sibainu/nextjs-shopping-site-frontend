import { createContext, useState } from "react";
import { useRouter } from "next/router";

const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  const login = async (email) => {
    setUser({ email });
    router.push("/"); //redirect
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

// export default AuthContext;
