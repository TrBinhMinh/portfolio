import { Fragment } from "react";
import BriefIntroduction from "/components/homepage/brief-introduction";
import Hero from "/components/homepage/hero";
import LinksToOtherPages from "/components/homepage/links-to-other-pages";
import MoreInfo from "/components/homepage/more-info";

const Homepage = () => {
  return (
    <Fragment>
      <Hero />
      <BriefIntroduction />
      <MoreInfo />
      <LinksToOtherPages />
    </Fragment>
  );
};

export default Homepage;
