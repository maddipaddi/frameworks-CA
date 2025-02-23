import { useState } from "react";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="m-4 p-4 font-logo">
      <nav className="flex justify-between">
        <section className="flex lg:hidden">
          <button
            className="cursor-pointer"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <i className="fa-solid fa-bars text-2xl text-primary"></i>
          </button>
          <div
            className={`fixed top-4 left-4 w-64 h-80 rounded-lg bg-primary shadow-lg p-5 transform ${
              isNavOpen ? "translate-x-0" : "-translate-x-[110%]"
            } transition-transform duration-300 ease-in-out`}
          >
            <button
              className="text-xl text-background absolute top-4 right-4 cursor-pointer"
              onClick={() => setIsNavOpen(false)}
            >
              <i className="fa-solid fa-x"></i>
            </button>

            <ul className="flex flex-col items-center justify-between text-lg font-semibold text-background bg-primary mt-10 space-y-4">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </section>
        <h1 className="text-2xl font-semibold text-primary">ClicketyCart</h1>
        <ul className="hidden lg:flex gap-4 text-lg font-semibold text-primary">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <i className="fa-solid fa-cart-shopping text-primary text-2xl"></i>
      </nav>
    </header>
  );
}

export default Header;
