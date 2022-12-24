import BriefIntroduction from "../components/homepage/BriefIntroduction";
import Hero from "../components/homepage/Hero";
import LinksToOtherPages from "../components/homepage/LinksToOtherPages";
import MoreInfo from "../components/homepage/MoreInfo";

const Homepage = () => {
  return (
    <>
      <Hero />
      <BriefIntroduction />
      <MoreInfo />
      <LinksToOtherPages />
    </>
  );
};

export default Homepage;
