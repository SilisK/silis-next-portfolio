"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import hamburger_menu_src from "../assets/hamburger-menu-svgrepo-com.png";

export default function Navbar() {
  const [screenWidth, setScreenWidth] = useState();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    // For responsive navbar
    setScreenWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });

    setInitialized(true);
  }, []);

  return (
    <nav className="bg-black w-screen border-b fixed flex justify-between items-center px-3 lg:px-10">
      <div className="logo">
        <Link href="/">Silis Kleemoff</Link>
      </div>
      {/*  */}
      {initialized ? (
        screenWidth <= 1024 ? (
          <div className="cursor-pointer">
            <Image
              src={hamburger_menu_src}
              alt="hamburger menu"
              width={46}
              height={46}
            />
          </div>
        ) : (
          <div className="flex gap-10">
            <Link href={"/websites"}>Websites</Link>
            <Link href={"/games"}>Games</Link>
            <Link href={"/contact"}>Contact</Link>
          </div>
        )
      ) : null}
    </nav>
  );
}
