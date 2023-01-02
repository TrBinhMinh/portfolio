import classes from "./about-me-content.module.scss";
import Image from "next/image";
import myPicture from "/public/images/my-picture.jpeg";

const AboutMeContent = () => {
  return (
    <article className={classes.container}>
      <h2 className={classes["container--heading"]}>About Me</h2>
      <Image
        className={classes["container--picture"]}
        src={myPicture}
        width={300}
      />
      <p className={classes["container--content"]}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        reiciendis quis a impedit aliquam ipsam eveniet quae at culpa assumenda
        eum, blanditiis deserunt dolores! Exercitationem laboriosam iure
        perferendis mollitia blanditiis. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Voluptates reiciendis quis a impedit aliquam ipsam
        eveniet quae at culpa assumenda eum, blanditiis deserunt dolores!
        Exercitationem laboriosam iure perferendis mollitia blanditiis. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Voluptates reiciendis
        quis a impedit aliquam ipsam eveniet quae at culpa assumenda eum,
        blanditiis deserunt dolores! Exercitationem laboriosam iure perferendis
        mollitia blanditiis.
      </p>
    </article>
  );
};

export default AboutMeContent;
