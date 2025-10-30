export default function Header() {
  return (
    <header className="dark:bg-black/5 w-full h-24 flex justify-center items-center sticky top-0">
      <nav className="dark:bg-white w-full lg:w-1/4 bg-black/5 px-10 py-2.5 md:rounded-3xl">
        <ul className="w-full flex justify-around font-semibold text-2xl">
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#features">Learn</a>
          </li>
          <li>
            <a href="#about_me">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
