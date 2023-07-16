import { Fragment } from "react";
import Hero from "../components/homepage/hero";
import BriefIntroduction from "../components/homepage/brief-introduction";
import MoreInfo from "../components/homepage/more-info";
import LinksToOtherPages from "../components/homepage/links-to-other-pages";

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
