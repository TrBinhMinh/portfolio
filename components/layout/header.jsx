import Link from 'next/link';
import NavMenu from '../ui/nav-menu';
import Navigation from './navigation';
import { RiArrowDropDownLine } from 'react-icons/ri';
import USAFlag from '../../public/icons/usa-flag.svg';
import { useState } from 'react';
import classNames from 'classnames';
import classes from './header.module.scss';

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
      className={classes.container}
      // className={classNames(
      //   'fixed p-5 z-10 inset-0 grid grid-cols-2 2xl:mx-68 lg:mx-52 md:static md:p-0 md:grid-cols-3 md:mt-13',
      //   isOpened ? 'backdrop-blur-2xl' : ''
      // )}
    >
      {/* <Link className={"text-txt-color text-2xl justify-self-start"} href="/"> */}
      <Link className={classes['container--logo']} href="/">
        M.dev
      </Link>
      <NavMenu
        onClick={clickHandler}
        isOpened={isOpened}
        className={classes['container--nav-menu']}
        // className="inline-block justify-self-end md:hidden"
      />
      <Navigation
        className={classes['container--navigation']}
        pages={pages}
        isOpened={isOpened}
        clickHandler={clickHandler}
      />
      <div
        // className={classNames(
        //   'w-fit justify-self-center flex flex-col gap-10 items-center col-span-full ease-in duration-300 md:flex-row md:gap-1.5 md:col-auto md:justify-self-end md:translate-y-0 md:opacity-100 md:pointer-events-auto',
        //   isOpened
        //     ? ['opacity-100', 'translate-y-0', 'pointer-events-auto']
        //     : ['opacity-0', '-translate-y-3/4', 'pointer-events-none']
        // )}
        className={classes['container--cta-lang']}
      >
        {/* <div className="flex gap-1 items-center order-2 md:order-1"> */}
        <div className={classes['container--cta-lang--lang-settings']}>
          <USAFlag />
          <p className={classes['container--cta-lang--lang-settings--txt']}>EN</p>
          <RiArrowDropDownLine
            className={classes['container--cta-lang--lang-settings--dropdown']}
            size={'3rem'}
            title="Dropdown Icon"
          />
        </div>
        <Link
          // className="text-txt-color text-lg font-bold px-4 py-2 border rounded-full md:order-2"
          className={classes['container--cta-lang--cta-btn']}
          href="/contact"
        >
          Let's contact
        </Link>
      </div>
    </header>
  );
};

export default Header;
