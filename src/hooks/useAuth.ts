import { supabase } from "@/utils/supabaseClient";
import { AuthError, User } from "@supabase/supabase-js";
import { useState, useEffect } from "react";

interface UserObject extends User {
  id: string;
  email: string;
  name: string;
  avatar_url: string;
}

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<UserObject | null>(null);

  // Sign up function
  const signUp = async (
    email: string,
    password: string,
    name: string,
    username: string
  ) => {
    setLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase.auth.signUp({ email, password });
      if (error) {
        setError(error.message);
      } else {
        setUser(user);
        // Post data to your API to create/update the user
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Sign in function
  const signInWithEmail = async (email: string, password: string) => {
    setLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        setError(error.message);
      } else {
        setUser(user);
        // Post data to your API to create/update the user
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch user data function
  const fetchUser = async () => {
    setLoading(true);
    setError(null);

    try {
      const user = await supabase.auth.getUser();
      if (user) {
        // Post data to your API to create/update the user
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Google sign-in function
  async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    console.log("data", data, "error", error);
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut();
    console.log("error", error);
  }

  return {
    loading,
    error,
    user,
    signUp,
    signInWithEmail,
    fetchUser,
    signInWithGoogle,
    signOut,
  };
};
