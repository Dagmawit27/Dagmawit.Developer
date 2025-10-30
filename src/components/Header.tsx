import { useEffect, useState } from "react";
import "./header.css";

export function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const toggleMenu = () => setMenuActive(!menuActive);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
   
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    function handleScroll() {
      const header = document.getElementById("header");

      if (window.scrollY > 0) {
        header?.classList.add("sticky");
      } else {
        header?.classList.remove("sticky");
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header id="header">
      <div className="logo-container">
        <h1><a href="#home">Dagmawit.dev</a></h1>
      </div>

      <nav className={`menu-container ${menuActive ? "active" : ""}`}>
        <a href="#home">HOME</a>
        <a href="#about">ABOUT ME</a>
        <a href="#projects">PROJECTS</a>
        <a href="#contact">CONTACT</a>
      </nav>
       <div className="menu-icon" onClick={toggleMenu}>
        {menuActive ? "✖" : "☰"}
      </div>
        <div className="theme-toggle" onClick={toggleTheme}>
          {theme === "dark" ? "Light Mode☀️" : "Dark Mode🌙"}
        </div>
    </header>
  );
}
