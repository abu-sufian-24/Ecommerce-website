
import { useEffect, useState } from "react";
import dark1 from "../../assets/website/dark-mode-button.png";
import light from "../../assets/website/light-mode-button.png"

function DarkMode() {

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  )

  let element = document.documentElement;

  useEffect(() => {
    if (theme === 'dark') {
      element.classList.add('dark');
      localStorage.getItem("theme", "dark");
    } else {
      element.classList.remove('dark');
      localStorage.getItem("theme", "light");
    };

  }, [theme]);


  return (
    <div className="  relative">
      <img onClick={() => setTheme(theme === "light" ? "dark" : "light")} className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${theme === "dark" ? "opacity-0" : "opacity-100"}`} src={light} alt="" />

      <img onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300" src={dark1} alt="" />
    </div>
  )
}

export default DarkMode