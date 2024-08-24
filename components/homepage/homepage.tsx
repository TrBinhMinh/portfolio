import { Fragment } from "react";
import Hero from "./hero";
import BriefIntroduction from "./brief-introduction";
import MoreInfo from "./more-info";
// import LinksToOtherPages from "./links-to-other-pages";

const Homepage = () => {
  return (
    <Fragment>
      <Hero />
      <BriefIntroduction />
      <MoreInfo />
      {/* <LinksToOtherPages /> */}
    </Fragment>
  );
};

export default Homepage;
