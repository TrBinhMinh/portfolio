import classes from "./brief-introduction.module.scss";
import { HiCode } from "react-icons/hi";

const BriefIntroduction = () => {
  return (
    <section className={classes.container}>
      <HiCode className={classes["container--icon"]} />
      <h2 className={classes["container--heading"]}>
        I'm Tran Binh Minh, a software developer from Vietnam.
      </h2>
      <p className={classes["container--content"]}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas esse quo
        tempore distinctio incidunt excepturi, laboriosam neque, necessitatibus
        eaque, cupiditate iste aperiam et quod! Modi officia aperiam expedita
        est et.
      </p>
    </section>
  );
};

export default BriefIntroduction;
