import { Fragment } from "react";
import Hero from "./hero";
import BriefIntroduction from "./brief-introduction";
import MoreInfo from "./more-info";
import LinksToOtherPages from "./links-to-other-pages";

import { HiCode } from "react-icons/hi";
import { AiOutlineForm } from "react-icons/ai";
import { HiOutlineInformationCircle } from "react-icons/hi";

import classes from "./homepage.module.scss";

const Homepage = () => {
  return (
    <Fragment>
      <Hero />
      <div className={classes["box-container"]}>
        <div className={classes["box-container--box"]}>
          <HiCode className={classes["box-container--box--icon"]} />
          <h3 className={classes["box-container--box--heading"]}>About Me</h3>
        </div>
        <div className={classes["box-container--box"]}>
          <HiOutlineInformationCircle className={classes["box-container--box--icon"]} />
          <h3 className={classes["box-container--box--heading"]}>Portfolio</h3>
        </div>
        <div className={classes["box-container--box"]}>
          <HiOutlineInformationCircle className={classes["box-container--box--icon"]} />
          <h3 className={classes["box-container--box--heading"]}>Services</h3>
        </div>
        <div className={classes["box-container--box"]}>
          <AiOutlineForm className={classes["box-container--box--icon"]} />
          <h3 className={classes["box-container--box--heading"]}>Contact Us</h3>
        </div>
      </div>
      {/* <BriefIntroduction />
      <MoreInfo />
      <LinksToOtherPages /> */}
    </Fragment>
  );
};

export default Homepage;
