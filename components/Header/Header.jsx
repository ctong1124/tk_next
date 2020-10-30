import React from "react";
import PropTypes from "prop-types";
import Link from 'next/link'
import cn from 'classnames';
import Icon from '../Icon';
import utilStyles from '../../styles/utils.module.scss';
import classes from './Header.module.scss';

const Header = () => {
  const activeStyle = { color: 'blue' };
  return (
    <header className={classes.headerContainer}>
      <Link href="/">
        <a>
          <div className={classes.logo}>
            {/* <img src="/images/tk_logo.svg" alt="Tong's Kitchen logo" />*/}
            <Icon name="logo" />
            <div className={cn(classes.logoText, utilStyles.bold)}>
              Tong's{"\n"}Kitchen
              <div className={classes.highlight}/>
            </div>

          </div>
        </a>
      </Link>

      <nav>
        <div className={classes.linkContainer}>
          <Link href="/recipes"><a className={classes.headerLink}>Recipes</a></Link>
          <div className={classes.highlight} />
        </div>
        <div className={classes.linkContainer}>
          <Link href="/blog"><a className={classes.headerLink}>Blog</a></Link>
          <div className={classes.highlight} />
        </div>
        <div className={classes.linkContainer}>
          <Link href="/about"><a className={classes.headerLink}>About</a></Link>
          <div className={classes.highlight} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
