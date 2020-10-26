import Head from 'next/head';
import PropTypes from 'prop-types';
import utilStyles from '../styles/utils.module.scss';
import Link from 'next/link';
import cn from 'classnames';
import classes from '../styles/pages/recipes.module.scss';
import { Layout, DescriptionCard } from '../components';

const array = [1, 2, 3, 4, 5, 6];

const Recipes = () => {
  return (
    <Layout>
      <div className={cn(utilStyles.containedSection, utilStyles.sectionSpacing, classes.recipesPage)}>
        <h1>All recipes</h1>
        {
          array.map((cardNum) => (
            <DescriptionCard
              cardTitle={`Card title ${cardNum}`}
              key={`key${cardNum}`}
              cardBottomInfo={[{title: 'Time', subtitle: '20 mins'}, {title: 'Time', subtitle: '20 mins'}]}
              cardImage="https://picsum.photos/id/1045/1000/500"
              cardLink="/recipe/recipe1"
            />
        ))
        }
      </div>
    </Layout>
  );
};

Recipes.propTypes = {};

Recipes.defaultProps = {};

export default Recipes;
