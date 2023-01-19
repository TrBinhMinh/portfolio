import classes from "./past-projects.module.scss";

const projectList = [
  { title: "Logistic Project", description: "Project about logistics" },
];

const PastProjects = () => {
  return (
    <section className={classes.container}>
      <h2 className={classes["container--heading"]}>My Past Projects</h2>
      <div className={classes["container--project-list"]}>
        <div className={classes["container--project-list--project"]}>
          <h3 className={classes["container--project-list--project--title"]}>
            Logistic Project
          </h3>
          <ul className={classes["container--project-list--project--carousel"]}>
            <li
              className={
                classes["container--project-list--project--carousel--image"]
              }
            >
              Image slide
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PastProjects;
