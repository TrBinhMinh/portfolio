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
        This is Minh Tran, a front-end developer from VietNam. I started my
        career 3 years ago with the love of changing the world through
        technology, by learning coding via the Internet, by myself...
      </p>
    </section>
  );
};

export default BriefIntroduction;
