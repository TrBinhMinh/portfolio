import { Link, NavLink } from "react-router-dom";
import classes from "./Navigation.module.scss";

const Navigation = () => {
  const navigations = [
    { name: "Homepage", route: "/" },
    { name: "About Me", route: "/aboutme" },
    { name: "Portfolio", route: "/portfolio" },
  ];

  return (
    <nav className={classes.container}>
      <menu className={classes["container--nav"]}>
        {navigations.map((nav) => (
          <NavLink
            key={nav.name}
            className={({ isActive, isPending }) =>
              isActive
                ? `${classes.link} ${classes["active-link"]}`
                : classes.link
            }
            to={nav.route}
            end
          >
            {nav.name}
          </NavLink>
        ))}
      </menu>
      <Link className={classes["btn-contact"]} to="/contact">
        Contact Us
      </Link>
    </nav>
  );
};

export default Navigation;
