import Account from "@/components/Account";
import { useSession } from "@supabase/auth-helpers-react";
import React from "react";

const Profile = () => {
  const session = useSession();

  if (!session) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Account session={session}></Account>
    </div>
  );
};

export default Profile;
