import Link from 'next/link';
import Navigation from './navigation';

const pages = [
  { name: 'Home', route: '/homepage' },
  { name: 'Work', route: '/testimonial' },
  { name: 'About', route: '/about-me' },
  { name: 'Blog', route: '/contact' },
];

const Header = () => {
  return (
    <header className="grid grid-cols-3 px-8 py-6 bg-bg-main">
      <Link className="text-txt-color text-2xl justify-self-start" href="/">
        M.dev
      </Link>
      <Navigation className="justify-self-center" pages={pages} />
      <Link
        className="text-txt-color text-lg font-bold p-4 border rounded-full justify-self-end"
        href="/contact"
      >
        Let's contact
      </Link>
    </header>
  );
};

export default Header;
