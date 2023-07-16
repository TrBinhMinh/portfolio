import Link from 'next/link';
import Navigation from './navigation';

import classes from './header.module.scss';

const Header = () => {
  return (
    <header className={`${classes.header} bg-bg-main`}>
      <Link className={classes['header--logo']} href="/">
        M.dev
      </Link>
      <Navigation />
    </header>
  );
};

export default Header;
