import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Account from "../components/Account";
import Container from "@/components/layout/Container";
import ViewEntries from "@/components/journal/ViewEntries";

const Home = () => {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <div className="h-full w-full">
      {!session ? (
        <div className="h-full flex items-center justify-center">
          <Auth
            providers={["google", "github", "facebook"]}
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            theme="dark"
          />
        </div>
      ) : (
        <Container>
          <ViewEntries />
        </Container>
      )}
    </div>
  );
};

export default Home;
