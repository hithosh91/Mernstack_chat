import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/users"); // This will be proxied to http://localhost:3000/users
        if (!res.ok) {
          console.log("res");
        }
        const data = await res.json();
        setConversations(data);
      } catch (error) {
        toast.error(`Failed to fetch conversations: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    getConversations();
  }, []);

  return { loading, conversations };
};

export default useGetConversations;
