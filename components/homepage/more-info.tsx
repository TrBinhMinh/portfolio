import classes from "./more-info.module.scss";
import { HiOutlineInformationCircle } from "react-icons/hi";

const MoreInfo = () => {
  return (
    <section className={classes.container}>
      <HiOutlineInformationCircle className={classes["container--icon"]} />
      <h2 className={classes["container--heading"]}>More about me</h2>
      <div className={classes["container--content"]}>
        Educations, Certificates, Programming Languages, Experience,
        Projects,...
      </div>
    </section>
  );
};

export default MoreInfo;
