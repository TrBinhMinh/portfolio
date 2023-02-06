import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import BaseButton from "../ui/base-button";
import NavMenu from "../ui/nav-menu";
import classNames from "classnames";

import classes from "./navigation.module.scss";

const Navigation = () => {
  const { pathname } = useRouter();
  const [isOpened, setIsOpened] = useState(false);

  const navigations = [
    { name: "Homepage", route: "/homepage" },
    { name: "About Me", route: "/about-me" },
    { name: "Testimonial", route: "/testimonial" },
    { name: "Contact", route: "/contact" },
  ];

  const clickHandler = () => {
    setIsOpened((prevState) => !prevState);
  };

  return (
    <nav className={classes.container}>
      <div
        className={classNames({
          [classes["container--nav-background"]]: true,
          [classes["background-open"]]: isOpened,
        })}
      ></div>
      <menu
        className={classNames({
          [classes["container--nav"]]: true,
          [classes["nav-open"]]: isOpened,
        })}
        onClick={clickHandler}
      >
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
      <NavMenu
        onClick={clickHandler}
        isOpened={isOpened}
        className={classes["container--nav-menu"]}
      />
      <BaseButton
        buttonType="link"
        className={classes["btn-contact"]}
        href="/contact"
      >
        Contact Us
      </BaseButton>
    </nav>
  );
};

export default Navigation;
