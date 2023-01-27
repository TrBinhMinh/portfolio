import Image from "next/image";
import { useState } from "react";
import classes from "./slider.module.scss";

const Slider = ({ screenshots }) => {
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
    <div
      className={classes.slider}
      // style={{transform: 'scale(0.2)'}}
    >
      {screenshots?.map((screenshot, index) => (
        <div
          key={index}
          className={classes["slider--slide"]}
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
        className={classes["slider--btn-left"]}
        onClick={goToSlide.bind(null, "prev", screenshots.length - 1)}
      >
        &larr;
      </button>
      <button
        className={classes["slider--btn-right"]}
        onClick={goToSlide.bind(null, "next", screenshots.length - 1)}
      >
        &rarr;
      </button>
    </div>
  );
};

export default Slider;
