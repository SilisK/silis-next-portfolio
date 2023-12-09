"use client";

import { useEffect } from "react";

export default function Home() {
  async function handleAnimation() {
    await new Promise((resolve) => setTimeout(resolve, 1 * 1000));
    const devLink = document.querySelector("#dev-link");
    devLink.classList.remove("hidden");
    devLink.classList.add("white-text-fade-in");
  }

  useEffect(() => {
    handleAnimation();
  }, []);

  return (
    <main className="grid min-h-screen place-items-center">
      <header className="grid">
        <b id="dev-msg" className="white-text-fade-in">
          Silis is developing his new portfolio in{" "}
          <a href="https://nextjs.org">Next.js</a>
        </b>
        <a
          id="dev-link"
          href={"https://silisk.github.io"}
          className="flex gap-2 hidden"
        >
          <div className="arrow-blinking">{">"}</div>
          <b>Current Portfolio</b>
        </a>
      </header>
    </main>
  );
}
