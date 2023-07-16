import mobileBg from "../assets/pattern-bg-mobile.png";
import desktopBg from "../assets/pattern-bg-desktop.png";
import classes from "./Header.module.css";

function Header() {
  return (
    <div>
      <picture>
        <source media="(min-width: 576px)" srcSet={desktopBg} />
        <img className={classes.mobileBg} src={mobileBg} alt="Background pattern" />
      </picture>
    </div>
  );
}

export default Header;
