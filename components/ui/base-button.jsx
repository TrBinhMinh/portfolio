import classNames from "classnames";
import Link from "next/link";

import classes from "./base-button.module.scss";

const BaseButton = (props) => {
  const { className } = props;

  if (props.buttonType === "link")
    return (
      <Link className={classNames(classes.btn, className)} href={props.href}>
        {props.children}
      </Link>
    );

  if (props.buttonType === "submit")
    return (
      <button type="submit" className={classNames(classes.btn, className)}>
        {props.children}
      </button>
    );
};

export default BaseButton;
