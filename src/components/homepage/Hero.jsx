import HeroImage from "../../assets/images/hero-image.jpg";
import classes from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={classes.container}>
      <div className={classes["container--heading-box"]}>
        <h1 className={classes["container--heading-box--heading"]}>
          Make your website or application runs smoothly!
        </h1>
      </div>
    </section>
  );
};

export default Hero;
