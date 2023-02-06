import { useState } from "react";
import { AiOutlineMenu as OpenIcon } from "react-icons/ai";
import { AiOutlineClose as CloseIcon } from "react-icons/ai";
import classNames from "classnames";

import classes from "./nav-menu.module.scss";

const NavMenu = (props) => {
  const [isOpened, setIsOpened] = useState(false);
  const clickHandler = () => {
    props.onClick();
    setIsOpened((prevState) => !prevState);
  };

  return isOpened ? (
    <CloseIcon
      className={classNames(
        props.className,
        classes.icon,
        classes["icon-close"]
      )}
      onClick={clickHandler}
    />
  ) : (
    <OpenIcon
      className={classNames(
        props.className,
        classes.icon,
        classes["icon-open"]
      )}
      onClick={clickHandler}
    />
  );
};

export default NavMenu;
