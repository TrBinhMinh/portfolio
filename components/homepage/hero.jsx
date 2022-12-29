import Image from "next/image";
import bgImg from "../../public/images/hero-image.jpg";

import classes from "./hero.module.scss";

const Hero = () => {
  return (
    <section className={classes.container}>
      <div className={classes["container--heading-box"]}>
        <Image
          src={bgImg}
          fill
          priority
          alt="A screen of website/application development code."
          placeholder="blur"
        />
        <div
          className={classes["container--heading-box--backdrop-filter"]}
        ></div>
        <h1 className={classes["container--heading-box--heading"]}>
          Make your website or application runs smoothly!
        </h1>
      </div>
    </section>
  );
};

export default Hero;
