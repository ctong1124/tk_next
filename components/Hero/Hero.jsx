import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import utilStyles from '../../styles/utils.module.scss';
import classes from './Hero.module.scss';

const Hero = ({
  heroPreText,
  heroHeadline,
  heroPostText,
  image,
}) => {
  return (
    <div className={classes.heroContainer}>
      <div className={classes.mediaContainer}>
        <img src="https://picsum.photos/id/1045/1000/500"/>
      </div>
      <div className={classes.textContainer}>
        <div className={classes.bar} />
        <p className={cn(classes.preText, utilStyles.textSmall)}>{ heroPreText }</p>
        <h1 className={cn(classes.heroHeadline, utilStyles.headline)}>{ heroHeadline }</h1>
        <p className={classes.postText}>{ heroPostText }</p>
      </div>
    </div>
  );
}

Hero.propTypes = {
  heroPreText: PropTypes.string,
  heroHeadline: PropTypes.string,
  heroPostText: PropTypes.string,
  image: PropTypes.string,
};

Hero.defaultProps = {
  heroPreText: '',
  heroHeadline: '',
  heroPostText: '',
  image: '',
};

export default Hero;
