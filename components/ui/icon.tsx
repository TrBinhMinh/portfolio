import classes from "./icon.module.scss";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Icon = (props) => {
  switch (props.iconName) {
    case "facebook":
      return <BsFacebook className={classes.icon} />;
    case "linkedin":
      return <BsLinkedin className={classes.icon} />;
    case "github":
      return <BsGithub className={classes.icon} />;
    default:
      return <span>Icon</span>;
  }
};

export default Icon;
