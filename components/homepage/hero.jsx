import Asterisk from '../../public/icons/asterisk.svg';
import classNames from 'classnames';

const Hero = () => {
  const mainHeadingStylings =
    'text-7xl font-medium uppercase shrink-0 xl:tracking-wider';

  return (
    <section className="2xl:mx-68 lg:mx-52 h-[100vh - 100px] flex items-center">
      <div className="text-asterisk text-6xl text-secondary-color">
        <p className="block mb-12">Hi there! I'm</p>
        <div className="flex gap-8 mb-11">
          <Asterisk className="w-32 2xl:basis-1/3 lg:basis-1/5" />
          <p className={mainHeadingStylings}>Tran Binh Minh</p>
          <h1 className="text-txt-color text-xl font-medium text-justify shrink-1">
            I started my career 3 years ago with the love of changing the world
            through technology
          </h1>
        </div>
        <p className={mainHeadingStylings}>
          a <span className="text-gradient-end">software</span> developer
        </p>
      </div>
    </section>
  );
};

export default Hero;
