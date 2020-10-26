import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import cn from 'classnames';
import utilStyles from '../../styles/utils.module.scss';
import classes from './Hero.module.scss';

const Hero = ({
  heroPreText,
  heroHeadline,
  heroPostText,
  image,
  heroLink,
}) => {
  const postText = <p className={classes.postText}>{ heroPostText }</p>;
  const postTextWithLink = heroLink ? (
    <Link href={heroLink}><a>
      <div className={classes.postTextWithLink}>
        {postText}
        <div className={classes.highlight} />
      </div>
    </a></Link>
  ) : postText;

  const imageSrc = <img src={image || 'https://picsum.photos/id/1045/1000/500'}/>;
  const imageWithLink = heroLink ? (
    <Link href={heroLink}><a>{imageSrc}</a></Link>
  ) : imageSrc;
  return (
    <div className={classes.heroContainer}>
      <div className={classes.mediaContainer}>
        {imageWithLink}
      </div>
      <div className={classes.textContainer}>
        <div className={classes.bar} />
        <p className={cn(classes.preText, utilStyles.textSmall)}>{ heroPreText }</p>
        <h1 className={cn(classes.heroHeadline, utilStyles.headline)}>{ heroHeadline }</h1>
        { heroPostText && postTextWithLink }
      </div>
    </div>
  );
}

Hero.propTypes = {
  heroPreText: PropTypes.string,
  heroHeadline: PropTypes.string,
  heroPostText: PropTypes.string,
  image: PropTypes.string,
  herolink: PropTypes.string,
};

Hero.defaultProps = {
  heroPreText: '',
  heroHeadline: '',
  heroPostText: '',
  image: '',
  heroLink: '',
};

export default Hero;
