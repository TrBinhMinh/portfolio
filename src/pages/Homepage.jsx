import BriefIntroduction from "../components/homepage/BriefIntroduction";
import Hero from "../components/homepage/Hero";

const Homepage = () => {
  return (
    <>
      <Hero />
      <BriefIntroduction />
      <div>
        Educations, Certificates, Programming Languages, Experience,
        Projects,...
      </div>
      <div>Link to other pages</div>
    </>
  );
};

export default Homepage;
