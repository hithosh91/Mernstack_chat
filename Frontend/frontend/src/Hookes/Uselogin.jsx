import { useState } from "react";
import { useAuthContext } from "../context/Authcontex";

export const Uselogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async (username, password) => {
    setLoading(true);
    try {
      const respose = await fetch("api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await respose.json();
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return { login, loading };
};
