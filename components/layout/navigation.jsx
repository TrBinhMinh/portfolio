import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';

const Navigation = ({ className, pages, isOpened, clickHandler }) => {
  const { pathname } = useRouter();

  return (
    <nav
      className={classNames(
        className,
        'flex',
        'flex-col',
        'gap-16',
        'items-center',
        isOpened
          ? ['opacity-100', 'translate-y-0', 'pointer-events-auto']
          : ['opacity-0', '-translate-y-3/4', 'pointer-events-none'],
        'md:flex-row',
        'md:translate-y-0',
        'md:static',
        'md:opacity-100',
        'md:pointer-events-auto',
        'md:gap-12',
        'ease-in duration-300'
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
    </nav>
  );
};

export default Navigation;
