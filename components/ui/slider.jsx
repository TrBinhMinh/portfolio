const Slider = () => {
  return (
    <div
      className={classes["container--project-list--project--slider"]}
      // style={{transform: 'scale(0.2)'}}
    >
      {project.screenshots?.map((screenshot, index) => (
        <div
          key={index}
          className={classes["container--project-list--project--slider--slide"]}
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
        onClick={goToSlide.bind(null, "prev", project.screenshots.length - 1)}
      >
        &larr;
      </button>
      <button
        className={
          classes["container--project-list--project--slider--btn-right"]
        }
        onClick={goToSlide.bind(null, "next", project.screenshots.length - 1)}
      >
        &rarr;
      </button>
    </div>
  );
};

export default Slider;
