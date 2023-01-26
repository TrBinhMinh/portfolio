import Image from "next/image";
import { useState } from "react";
import classes from "./past-projects.module.scss";

import logisticImg1 from "/public/images/portfolio-images/logistic-project/dimerco-screenshot-1.jpg";
import logisticImg2 from "/public/images/portfolio-images/logistic-project/dimerco-screenshot-2.jpg";
import logisticImg3 from "/public/images/portfolio-images/logistic-project/dimerco-screenshot-3.jpg";
import logisticImg4 from "/public/images/portfolio-images/logistic-project/dimerco-screenshot-4.jpg";
import logisticImg5 from "/public/images/portfolio-images/logistic-project/dimerco-screenshot-5.jpg";

const projectList = [
  {
    title: "Logistic Project",
    description: "Project about logistics",
    // screenshots: [
    //   "/public/images/portfolio-images/logistic-project/dimerco-screenshot-1.jpg",
    //   "/public/images/portfolio-images/logistic-project/dimerco-screenshot-2.jpg",
    //   "/public/images/portfolio-images/logistic-project/dimerco-screenshot-3.jpg",
    //   "/public/images/portfolio-images/logistic-project/dimerco-screenshot-4.jpg",
    //   "/public/images/portfolio-images/logistic-project/dimerco-screenshot-5.jpg",
    // ],
    screenshots: [
      logisticImg1,
      logisticImg2,
      logisticImg3,
      logisticImg4,
      logisticImg5,
    ],
  },
  {
    title: "Japanese Teaching Project",
    description: "Project for students to learn Japanese",
    screenshots: [
      logisticImg1,
      logisticImg2,
      logisticImg3,
      logisticImg4,
      logisticImg5,
    ],
  },
  {
    title: "Car Market Project",
    description: "Project about selling cars",
    screenshots: [
      logisticImg1,
      logisticImg2,
      logisticImg3,
      logisticImg4,
      logisticImg5,
    ],
  },
];

const PastProjects = () => {
  const [curSlide, setCurSlide] = useState(0);

  const goToSlide = (direction, sliderLength) => {
    switch (direction) {
      case "next":
        setCurSlide((prevSlide) => {
          if (prevSlide === sliderLength) return 0;
          return prevSlide + 1;
        });
        break;
      case "prev":
        setCurSlide((prevSlide) => {
          if (prevSlide === 0) return sliderLength;
          return prevSlide - 1;
        });
        break;
      default:
        console.error("Slider functionality went wrong!");
    }
  };

  return (
    <section className={classes.container}>
      <h2 className={classes["container--heading"]}>My Past Projects</h2>
      <ul className={classes["container--project-list"]}>
        {projectList.map((project) => (
          <li
            className={classes["container--project-list--project"]}
            key={project.title}
          >
            <h3 className={classes["container--project-list--project--title"]}>
              {project.title}
            </h3>
            <p
              className={
                classes["container--project-list--project--description"]
              }
            >
              {project.description}
            </p>
            <div
              className={classes["container--project-list--project--slider"]}
              // style={{transform: 'scale(0.2)'}}
            >
              {project.screenshots?.map((screenshot, index) => (
                <div
                  key={index}
                  className={
                    classes["container--project-list--project--slider--slide"]
                  }
                  style={{
                    transform: `translateX(${100 * (index - curSlide)}%)`,
                  }}
                >
                  <Image
                    src={screenshot}
                    width={800}
                    alt="A Logistic Project screenshot"
                  />
                </div>
              ))}

              <button
                className={
                  classes["container--project-list--project--slider--btn-left"]
                }
                onClick={goToSlide.bind(
                  null,
                  "prev",
                  project.screenshots.length - 1
                )}
              >
                &larr;
              </button>
              <button
                className={
                  classes["container--project-list--project--slider--btn-right"]
                }
                onClick={goToSlide.bind(
                  null,
                  "next",
                  project.screenshots.length - 1
                )}
              >
                &rarr;
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PastProjects;
