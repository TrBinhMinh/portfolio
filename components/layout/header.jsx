import Link from 'next/link';
import Navigation from './navigation';
import classNames from 'classnames';

import classes from './header.module.scss';

const Header = () => {
  const headerStyle = classNames('flex-auto', 'bg-bg-main')

  return (
    // <header className={`${classes.header} bg-bg-main`}>
    <header className={headerStyle}>
      <Link className='text-txt-color text-2xl' href="/">
        M.dev
      </Link>
      <Navigation />
    </header>
  );
};

export default Header;
