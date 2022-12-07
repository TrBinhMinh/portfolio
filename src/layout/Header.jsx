import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header className={classes.header}>
      <Link className={classes["header--logo"]} to="/">
        {"<Minh.dev>"}
      </Link>
      <Navigation />
    </header>
  );
};

export default Header;
