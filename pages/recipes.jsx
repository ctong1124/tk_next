import Head from 'next/head';
import PropTypes from 'prop-types';
import { getSortedPostsData } from '../lib/posts'
import utilStyles from '../styles/utils.module.scss';
import Link from 'next/link';
import cn from 'classnames';
import classes from '../styles/pages/recipes.module.scss';
import { Layout, DescriptionCard } from '../components';


const Recipes = ({
  recipes,
}) => {
  return (
    <Layout>
      <div className={cn(utilStyles.containedSection, utilStyles.sectionSpacing, classes.recipesPage)}>
        <h1>All recipes</h1>
        {
          recipes.map(({ title, description, thumbnail, difficulty, time, id}, i) => (
            <DescriptionCard
              cardTitle={title}
              key={id}
              cardDescription={description}
              cardBottomInfo={[
                {title: 'Time', subtitle: time },
                {title: 'Difficulty', subtitle: difficulty }
              ]}
              cardImage={thumbnail}
              cardLink={`recipe/${id}`}
            />
          ))
        }
      </div>
    </Layout>
  );
};

Recipes.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    thumbnail: PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
      title: PropTypes.string,
    }),
    difficulty: PropTypes.string,
    time: PropTypes.string,
    id: PropTypes.string,
  })),
};

Recipes.defaultProps = {
  recipes: [],
};

export async function getStaticProps() {
  const recipes = getSortedPostsData({ type: 'recipe', n: 10 });
  return {
    props: {
      recipes,
    }
  };
};

export default Recipes;
