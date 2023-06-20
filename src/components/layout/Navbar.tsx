// Navbar.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

type NavLink = {
  text: string;
  url: string;
};

type NavbarProps = {
  logoUrl?: string;
  navLinks?: NavLink[];
};

const Navbar: React.FC<NavbarProps> = ({ logoUrl, navLinks }) => {
  return (
    <nav className="hidden md:flex items-center space-x-4">
      {navLinks && (
        <ul className="flex">
          {navLinks.map((link, index) => (
            <li key={index} className="mx-2">
              <Link href={link.url} passHref>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
