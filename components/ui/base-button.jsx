import classNames from 'classnames';
import Link from 'next/link';

import classes from './base-button.module.scss';

const BaseButton = (props) => {
  if (props.buttonType === 'link')
    return (
      <Link
        className={classNames(
          'text-txt-color text-lg font-bold px-4 py-2 border rounded-full',
          props.className
        )}
        href={props.href}
      >
        {props.children}
      </Link>
    );

  if (props.buttonType === 'submit')
    return (
      <button
        type="submit"
        onClick={props.onClick}
        className={classNames(classes.btn, props.className)}
      >
        {props.children}
      </button>
    );
};

export default BaseButton;
