import { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "../utils/supabaseClient";

type User = {
  user: any;
  loading: boolean;
  error: any;
  children?: React.ReactNode;
};

const UserContext = createContext<User>({
  user: null,
  loading: false,
  error: null,
});

export const useUserContext = () => useContext(UserContext);

export const UserProvider: React.FC<User> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const user = await supabase.auth.getUser();
        setUser({ user, loading: false, error: null });
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    if (user) {
      fetchUser();
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};
