import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import utilStyles from '../../styles/utils.module.scss';
import classes from './CardGrid.module.scss';

const CardGrid = ({
  cardGridTitle,
  children,
}) => {
  return (
    <div className={classes.cardGridContainer}>
      {cardGridTitle &&
        <h2>{cardGridTitle}</h2>
      }
      <div className={cn(classes.cardsContainer, utilStyles.flexboxGridContainer)}>
        {React.Children.map(children, (child) => (
          <div className={cn(classes.cardChildContainer, utilStyles.flexboxGridChild)}>
            { child }
          </div>
        ))}
      </div>
    </div>
  );
}

CardGrid.propTypes = {
  cardGridTitle: PropTypes.string,
  children: PropTypes.node,
};

CardGrid.defaultProps = {
  cardGridTitle: '',
  children: null,
};

export default CardGrid;
