import React from "react";
import PropTypes from "prop-types";
import Link from 'next/link'
import cn from 'classnames';
import Icon from '../Icon';
import utils from '../../styles/utils.module.scss';
import classes from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={classes.footerContainer}>
      <div className={classes.content}>
        <div className={classes.links}>
          <div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/recipes"><a>Recipes</a></Link>
          </div>
          <div>
            <Link href="/blog"><a>Blog</a></Link>
            <Link href="/about"><a>About</a></Link>
          </div>
        </div>
        <div className={classes.footerNonLinks}>
          <div className={classes.description}>
            <p>Tong’s Kitchen is a recipe blah blah blah. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e.</p>
          </div>
          <div className={classes.mobileSocial}>
            <div className={classes.instagram}><Icon name="instagram" /></div>
            <div className={classes.youtube}><Icon name="youtube" /></div>
          </div>
          <div className={classes.copyright}>&#169; 2020 Carisa Tong. All Rights Reserved.</div>
        </div>
        <div className={classes.desktopSocial}>
          <div className={classes.instagram}><Icon name="instagram" /></div>
          <div className={classes.youtube}><Icon name="youtube" /></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
