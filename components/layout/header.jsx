import Link from "next/link";
import Navigation from "./navigation";

import classes from "./header.module.scss";

const Header = () => {
  return (
    <header className={classes.header}>
      <Link className={classes["header--logo"]} href="/">
        &lt;Minh.dev&gt;
      </Link>
      <Navigation />
    </header>
  );
};

export default Header;
