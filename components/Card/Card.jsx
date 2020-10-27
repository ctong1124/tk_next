import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import cn from 'classnames';
import utilStyles from '../../styles/utils.module.scss';
import classes from './Card.module.scss';

const Card = ({
  cardTitle,
  cardBottomInfo,
  cardImage,
  cardLink,
}) => {
  const card = (
    <div className={classes.cardContainer}>
      <div className={classes.mediaContainer}>
        <div className={classes.imageContainer}>
          <img src={cardImage.src} alt={cardImage.alt} title={cardImage.title}/>
        </div>
      </div>
      <div className={classes.textContainer}>
        <div className={classes.cardTextTop}>
          <h4 className={classes.title}>{ cardTitle }</h4>
        </div>
        <div className={classes.cardTextBottom}>
          {
            cardBottomInfo.map((section, i) => (
              <div className={classes.cardTextBottomSection} key={`${section.title}-${i}`}>
                <p className={utilStyles.primaryText}>{section.title}</p>
                <p className={utilStyles.secondaryText}>{section.subtitle}</p>
              </div>
            ))
          }
        </div>
      </div>
      <div className={classes.highlight} />
    </div>
  );
  return (
    cardLink ? <Link href={cardLink}><a>{ card }</a></Link> : card
  );
}

Card.propTypes = {
  cardTitle: PropTypes.string,
  cardBottomInfo: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
    })
  ),
  cardImage: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
  }),
  cardUrl: PropTypes.string,
};

Card.defaultProps = {
  cardTitle: '',
  cardBottomInfo: [],
  cardImage: {},
  cardLink: '',
};

export default Card;
