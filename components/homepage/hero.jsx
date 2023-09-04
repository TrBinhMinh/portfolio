import Image from 'next/image';
import bgImg from '../../public/images/hero-image.jpg';
import Asterisk from '../../public/icons/asterisk.svg';

import classes from './hero.module.scss';
import classNames from 'classnames';

const Hero = () => {
  const mainHeadingStylings = 'text-7xl font-medium grow';

  return (
    <section className="md:mx-40">
      <div className="text-asterisk text-6xl text-secondary-color">
        <p className="block">Hi there! I'm</p>
        <div className="flex">
          <Asterisk className="flex-none" />
          <p className={classNames(mainHeadingStylings)}>Binh Minh tran</p>
          <h1 className="text-txt-color text-xl font-medium text-justify flex-none">
            I started my career 3 years ago with the love of changing the world
            through technology
          </h1>
        </div>
        <p className={mainHeadingStylings}>
          a <span className="">software</span> developer
        </p>
      </div>
    </section>
  );
};

export default Hero;
