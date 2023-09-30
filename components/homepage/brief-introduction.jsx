import img from '../../public/images/hero-image.jpg';
import Image from 'next/image';
import BaseButton from '../ui/base-button';
import classes from './brief-introduction.module.scss';
import classNames from 'classnames';

const BriefIntroduction = () => {
  return (
    <section className="2xl:mx-68 lg:mx-52 grid grid-cols-5 gap-9 text-center">
      <h2
        className={classNames(
          'lg:col-span-2 text-secondary-color text-5.5xl font-medium uppercase',
          classes['text-shadow']
        )}
      >
        about me, a senior <span className="text-gradient-end">developer</span>
      </h2>
      <Image
        className="lg:col-span-3 lg:col-start-3 lg:row-span-2 lg:self-end"
        src={img}
        width={806}
        height={508}
      />
      <div className="lg:col-span-2">
        <p className="text-txt-color">
          This is Minh Tran, a front-end developer from VietNam. I started my
          career 3 years ago with the love of changing the world through
          technology, by learning coding via the Internet, by myself...
        </p>
        <BaseButton buttonType="link" href="/">
          View more
        </BaseButton>
      </div>
    </section>
  );
};

export default BriefIntroduction;
