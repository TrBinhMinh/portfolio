import Link from 'next/link';
import NavMenu from '../ui/nav-menu';
import Navigation from './navigation';
import { RiArrowDropDownLine } from 'react-icons/ri';
import USAFlag from '../../public/icons/usa-flag.svg';
import { useState } from 'react';
import classNames from 'classnames';

const pages = [
  { name: 'Home', route: '/homepage' },
  { name: 'Work', route: '/testimonial' },
  { name: 'About', route: '/about-me' },
  { name: 'Blog', route: '/contact' },
];

const Header = () => {
  const [isOpened, setIsOpened] = useState(false);

  const clickHandler = () => {
    setIsOpened((prevState) => !prevState);
  };

  return (
    <header
      className={classNames(
        'fixed p-5 z-10 inset-0 grid grid-cols-2 2xl:mx-68 lg:mx-52 md:static md:p-0 md:grid-cols-3 md:mt-13',
        isOpened ? 'backdrop-blur-2xl' : ''
      )}
    >
      <Link className="text-txt-color text-2xl justify-self-start" href="/">
        M.dev
      </Link>
      <NavMenu
        onClick={clickHandler}
        isOpened={isOpened}
        className="inline-block justify-self-end md:hidden"
      />
      <Navigation
        className="col-span-full md:col-auto"
        pages={pages}
        isOpened={isOpened}
        clickHandler={clickHandler}
      />
      <div
        className={classNames(
          'w-fit justify-self-center flex flex-col gap-10 items-center col-span-full ease-in duration-300 md:flex-row md:gap-1.5 md:col-auto md:justify-self-end md:translate-y-0 md:opacity-100 md:pointer-events-auto',
          isOpened
            ? ['opacity-100', 'translate-y-0', 'pointer-events-auto']
            : ['opacity-0', '-translate-y-3/4', 'pointer-events-none']
        )}
      >
        <div className="flex gap-1 items-center order-2 md:order-1">
          <USAFlag />
          <p className="text-txt-color">EN</p>
          <RiArrowDropDownLine
            className="text-txt-color w-6"
            size={'2.5em'}
            title="Dropdown Icon"
          />
        </div>
        <Link
          className="text-txt-color text-lg font-bold px-4 py-2 border rounded-full md:order-2"
          href="/contact"
        >
          Let's contact
        </Link>
      </div>
    </header>
  );
};

export default Header;
