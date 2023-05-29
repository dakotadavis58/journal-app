// Sidebar.tsx
import Image from "next/image";
import Link from "next/link";
import React from "react";

type SidebarProps = {
  logoUrl?: string;
  navLinks?: NavLink[];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

type NavLink = {
  text: string;
  url: string;
};

const Sidebar: React.FC<SidebarProps> = ({
  logoUrl,
  navLinks,
  isOpen,
  setIsOpen,
}) => {
  return (
    <div
      className={`absolute w-40 top-0 right-0 p-2 min-h-screen overflow-auto bg-gray-700 shadow-md transition-all duration-300 ease-in-out transform md:hidden z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button
        className="absolute right-2 top-2 text-gray-800 "
        onClick={() => setIsOpen(false)}
      >
        X
      </button>
      {logoUrl && (
        <div className="flex items-center justify-between">
          <Link href={logoUrl} passHref>
            <Image src={logoUrl} alt="Logo" className="h-8 w-auto" />
          </Link>
        </div>
      )}
      <ul className="flex flex-col gap-2">
        {navLinks &&
          navLinks.map((link, index) => (
            <li key={index} className="mx-2">
              <span className="p-1 transition-all duration-200 ease-in-out bg-gray-700 rounded-md transform origin-center">
                <Link href={link.url} passHref>
                  {link.text}
                </Link>
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Sidebar;
