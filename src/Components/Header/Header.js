import classes from "./Header.module.css";
import RiveriaLogoBlack from "../../Assets/SVG/RiveriaLogoBlack.svg";
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
  return (
    <header className={classes.header}>
      <img className={classes.logo} src={RiveriaLogoBlack} alt="logo" />
      <nav>
        <ul className={classes.navlist}>
          <li>
            <a className={classes.navlink} href="WhoAreWe?">
              WHO ARE WE?
            </a>
          </li>
          <li>
            <a className={classes.navlink} href="#">
              OUR TEAS
            </a>
          </li>
          <li>
            <a className={classes.navlink} href="#">
              TESTIMONIALS
            </a>
          </li>
          <li>
            <a className={classes.navlink} href="#">
              FIND US
            </a>
          </li>
        </ul>
      </nav>
      <HeaderCartButton onClick={props.onShowCart} />
    </header>
  );
}

export default Header;
