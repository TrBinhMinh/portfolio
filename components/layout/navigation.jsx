import Link from "next/link";
import { useRouter } from "next/router";

import classes from "./navigation.module.scss";

const Navigation = () => {
  const { pathname } = useRouter();

  const navigations = [
    { name: "Homepage", route: "/homepage" },
    { name: "About Me", route: "/about-me" },
    { name: "Portfolio", route: "/portfolio" },
    { name: "Contact", route: "/contact" },
  ];

  return (
    <nav className={classes.container}>
      <menu className={classes["container--nav"]}>
        {navigations.map((nav) => (
          <Link
            key={nav.name}
            className={
              pathname === nav.route
                ? `${classes.link} ${classes["active-link"]}`
                : classes.link
            }
            href={nav.route}
          >
            {nav.name}
          </Link>
        ))}
      </menu>
      <Link className={classes["btn-contact"]} href="/contact">
        Contact Us
      </Link>
    </nav>
  );
};

export default Navigation;
