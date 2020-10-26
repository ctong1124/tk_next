import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'
import cn from 'classnames';
import utils from '../../styles/utils.module.scss';
import classes from './DescriptionCard.module.scss';

const DescriptionCard = ({
  cardTitle,
  cardSubtitle,
  cardDescription,
  cardBottomInfo,
  cardImage,
  cardLink,
}) => {
  const card = (
    <div className={classes.cardContainer}>
      <div className={classes.mediaContainer}>
        <div className={classes.imageContainer}>
          <img src={cardImage}/>
        </div>
      </div>
      <div className={classes.textContainer}>
        <div className={classes.cardTextTop}>
          <h4 className={classes.title}>{ cardTitle }</h4>
          { cardSubtitle && (
            <p className={utils.secondaryText}>{cardSubtitle}</p>
          )}
          { cardDescription && (
            <p className={cn(classes.description, utils.secondaryText)}>
              {cardDescription}
            </p>
          )}
        </div>
        <div className={classes.cardTextBottom}>
          {
            cardBottomInfo.map((section, i) => (
              <div className={classes.cardTextBottomSection} key={`section-${i}`}>
                <p className={utils.primaryText}>{section.title}</p>
                <p className={utils.secondaryText}>{section.subtitle}</p>
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

DescriptionCard.propTypes = {
  cardTitle: PropTypes.string,
  cardSubtitle: PropTypes.string,
  cardDescription: PropTypes.string,
  cardBottomInfo: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
    })
  ),
  cardImage: PropTypes.string,
  cardUrl: PropTypes.string,
};

DescriptionCard.defaultProps = {
  cardTitle: '',
  cardSubtitle: '',
  cardDescription: 'Placeholder description for now. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet efficitur sapien. Phasellus libero felis, laoreet in purus sollicitudin, eleifend volutpat sapien.',
  cardBottomInfo: [],
  cardImage: '',
  cardLink: '',
};

export default DescriptionCard;
