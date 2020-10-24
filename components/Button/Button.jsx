import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'
import cn from 'classnames';
import utilStyles from '../../styles/utils.module.scss';
import classes from './Button.module.scss';

const Button = ({
  text,
  link,
  fullWidthBreakpoint,
}) => {
  return (
    <div className={cn(classes.buttonContainer, classes[`screen-${fullWidthBreakpoint}`])}>
      <Link href={link}>
        <a>
          <div className={classes.buttonArea}>
            <div className={classes.text}>{text}</div>
          </div>
        </a>
      </Link>
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  fullWidthBreakpoint: PropTypes.string,
};

Button.defaultProps = {
  fullWidthBreakpoint: 'xxxs',
};

export default Button;
