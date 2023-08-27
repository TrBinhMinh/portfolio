import { AiOutlineMenu as OpenIcon } from 'react-icons/ai';
import { AiOutlineClose as CloseIcon } from 'react-icons/ai';
import classNames from 'classnames';

import classes from './nav-menu.module.scss';

const NavMenu = ({ isOpened, className, onClick }) => {
  return isOpened ? (
    <CloseIcon
      className={classNames(className, classes.icon, classes['icon-close'])}
      onClick={onClick}
    />
  ) : (
    <OpenIcon
      className={classNames(className, classes.icon, classes['icon-open'])}
      onClick={onClick}
    />
  );
};

export default NavMenu;
