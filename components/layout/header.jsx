import Link from 'next/link';
import Navigation from './navigation';
import classNames from 'classnames';

const Header = () => {
  const headerStyle = classNames(
    'flex',
    'items-center',
    'px-8',
    'py-6',
    'bg-bg-main'
  );

  return (
    <header className={headerStyle}>
      <Link className="text-txt-color text-2xl" href="/">
        M.dev
      </Link>
      <Navigation />
    </header>
  );
};

export default Header;
