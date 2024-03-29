import classes from "./links-to-other-pages.module.scss";
import { AiOutlineForm } from "react-icons/ai";

const LinksToOtherPages = () => {
  return (
    <section className={classes.container}>
      <AiOutlineForm className={classes["container--icon"]} />
      <h2 className={classes["container--heading"]}>Links to other pages</h2>
      <p className={classes["container--content"]}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas esse quo
        tempore distinctio incidunt excepturi, laboriosam neque, necessitatibus
        eaque, cupiditate iste aperiam et quod! Modi officia aperiam expedita
        est et.
      </p>
    </section>
  );
};

export default LinksToOtherPages;
