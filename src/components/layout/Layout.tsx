import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import { useUser } from "@supabase/auth-helpers-react";
import BottomNavBar from "./BottomNav";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const user = useUser();

  let navLinks = [
    { text: "Home", url: "/" },
    { text: "About", url: "/about" },
    { text: "Contact", url: "/contact" },
    { text: "Login", url: "/login" },
    { text: "Register", url: "/register" },
    { text: "Profile", url: "/profile" },
  ];

  if (user) {
    // If user exists, remove the "Login" and "Register" links
    navLinks = navLinks.filter(
      (link) => link.text !== "Login" && link.text !== "Register"
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {" "}
      <Head>
        <title>Journal App</title>
      </Head>
      <Header
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        title="My Journal App"
        navLinks={navLinks}
      />
      <main className={`min-h-[92vh] px-2 py-2`}>{children}</main>
      {menuOpen && <div className="fixed inset-0 bg-black bg-opacity-50"></div>}
      <Footer />
      <BottomNavBar />
    </div>
  );
};

export default Layout;
