import { useState, useEffect } from "react";
import {
  useUser,
  useSupabaseClient,
  Session,
} from "@supabase/auth-helpers-react";
import { Database } from "../types/supabase";
type User = Database["public"]["Tables"]["User"]["Row"];

export default function Account({ session }: { session: Session }) {
  const supabase = useSupabaseClient<Database>();
  const user = useUser();
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState<User["name"]>("");
  const [image, setImage] = useState<User["image"]>(null);

  useEffect(() => {
    if (user) {
      console.log(user);

      setName(user.user_metadata.full_name);
      setImage(user.user_metadata.avatar_url);
    }
    setLoading(false);
  }, [user]);

  return (
    <div className="form-widget">
      <h1>My Account</h1>

      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" value={session.user.email} disabled />
      </div>
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={name || ""}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {/* <div>
        <button
          className="button primary block"
          onClick={() => updateUser({ name, image })}
          disabled={loading}
        >
          {loading ? "Loading ..." : "Update"}
        </button>
      </div> */}

      <div>
        <button
          className="button block"
          onClick={() => supabase.auth.signOut()}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
