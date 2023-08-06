import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import BaseButton from '../ui/base-button';
import NavMenu from '../ui/nav-menu';
import classNames from 'classnames';

import classes from './navigation.module.scss';

const Navigation = () => {
  const { pathname } = useRouter();
  const [isOpened, setIsOpened] = useState(false);

  const navigations = [
    { name: 'Home', route: '/homepage' },
    { name: 'Work', route: '/testimonial' },
    { name: 'About', route: '/about-me' },
    { name: 'Blog', route: '/contact' },
  ];

  const clickHandler = () => {
    setIsOpened((prevState) => !prevState);
  };

  return (
    <nav className="flex grow">
      <div
        className={classNames(classes['container--nav-background'], {
          [classes['background-open']]: isOpened,
        })}
      ></div>
      <menu
        // className={classNames({
        //   [classes['container--nav']]: true,
        //   [classes['nav-open']]: isOpened,
        // })}
        className={classNames(classes['container--nav'], {
          [classes['nav-open']]: isOpened,
        })}
        onClick={clickHandler}
      >
        {navigations.map((nav) => {
          const linkStyle = classNames(
            'inline-block',
            'text-txt-color',
            'no-underline',
            'ease-in duration-300',
            'text-base',
            'hover:-translate-y-2',
            'active:-translate-y-2',
            {'text-secondary': pathname === nav.route}
          );

          return (
            <Link
              key={nav.name}
              // className={
              //   pathname === nav.route
              //     ? `${classes.link} ${classes['active-link']}`
              //     : classes.link
              // }
              className={linkStyle}
              href={nav.route}
            >
              {nav.name?.toUpperCase()}
            </Link>
          );
        })}
      </menu>
      <NavMenu
        onClick={clickHandler}
        isOpened={isOpened}
        className={classes['container--nav-menu']}
      />
      <BaseButton
        buttonType="link"
        className={classes['btn-contact']}
        href="/contact"
      >
        Contact Us
      </BaseButton>
    </nav>
  );
};

export default Navigation;
