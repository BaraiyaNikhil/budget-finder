import { useState } from "react";

export default function Header() {
  const [isLight, setIsLight] = useState(true);

  return (
    <header className="dark:bg-black/5 w-full h-24 flex justify-center items-center sticky top-0">
      <nav className="dark:bg-white w-1/4 bg-black/5 px-10 py-2.5 rounded-3xl">
        <ul className="w-full flex justify-around font-semibold text-2xl">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Learn</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
