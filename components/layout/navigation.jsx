import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import NavMenu from '../ui/nav-menu';
import classNames from 'classnames';

import classes from './navigation.module.scss';

const Navigation = ({ className, pages }) => {
  const { pathname } = useRouter();
  const [isOpened, setIsOpened] = useState(false);

  const clickHandler = () => {
    setIsOpened((prevState) => !prevState);
  };

  return (
    <nav className={classNames('flex', className)}>
      <div
        aria-label="menu toggle for mobile"
        className={classNames(classes['container--nav-background'], {
          [classes['background-open']]: isOpened,
        })}
      ></div>
      <menu
        className={classNames('text-base', 'flex', 'gap-12', {
          [classes['nav-open']]: isOpened,
        })}
        onClick={clickHandler}
      >
        {pages.map((nav) => {
          const linkStyle = classNames(
            pathname === nav.route
              ? [
                  'text-secondary',
                  'after:content-[""]',
                  'after:w-1.5',
                  'after:h-1.5',
                  'after:mx-auto',
                  'after:block',
                  'after:rounded-full',
                  'after:bg-secondary',
                ]
              : 'text-txt-color',
            'font-bold',
            'inline-block',
            'no-underline',
            'ease-in duration-200',
            'text-base',
            'hover:text-secondary',
            'active:text-secondary'
          );

          return (
            <Link key={nav.name} className={linkStyle} href={nav.route}>
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
    </nav>
  );
};

export default Navigation;
