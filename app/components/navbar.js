"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [navExpanded, setNavExpanded] = useState(false);

  return (
    <nav className="bg-white w-screen font-bold border-b-4 fixed flex gap-5 flex-col justify-between items-start p-3 md:flex-row md:items-center lg:px-10">
      <div className="logo text-xl flex justify-between w-full">
        <Link href="/" className="w-max">
          Silis Kleemoff
        </Link>
        {/* Hamburger Menu on mobile */}
        <div className="md:hidden">
          <img
            src={
              navExpanded
                ? "https://www.svgrepo.com/show/497871/close-square.svg"
                : "https://www.svgrepo.com/show/313139/hamburger-menu.svg"
            }
            className="w-8 cursor-pointer"
            onClick={() => setNavExpanded(!navExpanded)}
          />
        </div>
      </div>
      {/* Nav Links */}
      <div
        className={`gap-10 w-full flex-col items-center ${
          navExpanded ? "flex" : "hidden"
        } md:flex md:flex-row md:w-max`}
      >
        <Link href={"/websites"}>Websites</Link>
        <Link href={"/games"}>Games</Link>
        <Link href={"/timeline"}>Timeline</Link>
        <Link href={"/contact"}>Contact</Link>
      </div>
    </nav>
  );
}
