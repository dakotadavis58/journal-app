// Header.tsx
import React, { useState } from "react";
import Navbar from "./Navbar";
import Link from "next/link";
import Image from "next/image";
import Sidebar from "./Sidebar";

type HeaderProps = {
  title: string;
  logoUrl?: string;
  navLinks?: NavLink[];
  menuOpen: boolean;
  setMenuOpen: (isOpen: boolean) => void;
};

type NavLink = {
  text: string;
  url: string;
};

const Header: React.FC<HeaderProps> = ({
  title,
  logoUrl,
  navLinks,
  menuOpen,
  setMenuOpen,
}) => {
  return (
    <header className="bg-emerald-800 p-4 shadow-md flex justify-between">
      {logoUrl && (
        <div className="flex items-center justify-between">
          <Link href={logoUrl} passHref>
            <Image src={logoUrl} alt="Logo" className="h-8 w-auto" />
          </Link>
        </div>
      )}
      <h1 className="text-xl font-semibold">{title}</h1>
      {/* if on small screen, show hamburger button */}
      <div>
        <Navbar navLinks={navLinks} />
      </div>
      <div className="md:hidden relative">
        {/* <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          Open
        </button> */}
      </div>
      {/* <Sidebar setIsOpen={setMenuOpen} isOpen={menuOpen} navLinks={navLinks} /> */}
    </header>
  );
};

export default Header;
