import classes from "./MoreInfo.module.scss";

const MoreInfo = () => {
  return (
    <section className={classes.container}>
      <h2 className={classes["container--heading"]}>More about me</h2>
      <div className={classes["container--content"]}>
        Educations, Certificates, Programming Languages, Experience,
        Projects,...
      </div>
    </section>
  );
};

export default MoreInfo;
