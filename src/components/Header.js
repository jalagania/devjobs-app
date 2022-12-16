import "./Header.css";
import { useGlobalContext } from "../context";
import logo from "./assets/desktop/logo.svg";
import sun from "./assets/desktop/icon-sun.svg";
import moon from "./assets/desktop/icon-moon.svg";

function Header() {
  const { darkMode, setDarkMode, toHomePage } = useGlobalContext();

  return (
    <header>
      <div className="header-box">
        <img src={logo} alt="logo" className="logo" onClick={toHomePage} />
        <div className="theme-box">
          <img src={sun} alt="sun" className="theme-icon" />
          <div
            className="theme-switcher"
            onClick={() => setDarkMode(!darkMode)}
          >
            <div
              className={`theme-ball ${darkMode ? "margin-left" : ""}`}
            ></div>
          </div>
          <img src={moon} alt="moon" className="theme-icon" />
        </div>
      </div>
    </header>
  );
}

export default Header;
