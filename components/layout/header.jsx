import Link from 'next/link';
import Navigation from './navigation';
import { RiArrowDropDownLine } from 'react-icons/ri';
import USAFlag from '../../public/icons/usa-flag.svg';

const pages = [
  { name: 'Home', route: '/homepage' },
  { name: 'Work', route: '/testimonial' },
  { name: 'About', route: '/about-me' },
  { name: 'Blog', route: '/contact' },
];

const Header = () => {
  return (
    <header className="grid grid-cols-3 mt-13 2xl:mx-66 xl:mx-40 bg-bg-main">
      <Link className="text-txt-color text-2xl justify-self-start" href="/">
        M.dev
      </Link>
      <Navigation className="justify-self-center" pages={pages} />
      <div className="w-fit justify-self-end flex items-center gap-1.5">
        <USAFlag />
        <p className="text-txt-color">EN</p>
        <RiArrowDropDownLine
          className="text-txt-color w-6"
          size={'2.5em'}
          title="Dropdown Icon"
        />
        <Link
          className="text-txt-color text-lg font-bold px-4 py-2 border rounded-full"
          href="/contact"
        >
          Let's contact
        </Link>
      </div>
    </header>
  );
};

export default Header;
