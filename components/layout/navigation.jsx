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
        className={classNames(
          'md:hidden',
          isOpened ? ['opacity-100', 'pointer-events-auto'] : ''
        )}
      ></div>
      <menu
        className={classNames(
          'text-base',
          'flex',
          'flex-col',
          'gap-12',
          'items-center',
          'fixed',
          'inset-0',
          'opacity-100',
          '-translate-y-2/3',
          'pointer-events-none',
          'md:flex-row',
          'md:translate-x-0',
          'md:static',
          'md:pointer-events-auto',
          isOpened
            ? ['opacity-100', '-translate-y-0', 'pointer-events-auto']
            : ''
        )}
        onClick={clickHandler}
      >
        {pages.map((nav) => {
          const linkStyle = classNames(
            pathname === nav.route
              ? ['text-secondary', 'after:bg-secondary']
              : 'text-txt-color',
            'after:content-[""]',
            'after:block',
            'after:w-1.5',
            'after:h-1.5',
            'after:mx-auto',
            'after:rounded-full',
            'font-bold',
            'inline-block',
            'no-underline',
            'ease-in duration-200',
            'text-base',
            'hover:text-secondary'
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
