import Head from 'next/head';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { getAllPostIds, getPostData, getPostDataNoBody } from '../../lib/posts'
import { Hero, CardGrid, Card, Layout } from '../../components';
import classes from '../../styles/pages/recipe.module.scss';
import utils from '../../styles/utils.module.scss';

const Recipe = ({
  recipeTitle,
  publishDate,
  heroImage,
  contentHtml,
  difficulty,
  time,
  servings,
  ingredients,
  steps,
  relatedRecipes,
}) => {
  // console.log('recipe props', props);
  return (
    <Layout>
      <Head>
        <title>Title</title>
      </Head>
      <div className={classes.recipePage}>
        <div className={utils.sectionSpacing}>
          <Hero
            heroHeadline={recipeTitle}
            heroPostText='Jump to recipe'
            image={heroImage}
          />
        </div>

        <article>
          <div className={cn(utils.containedSection, utils.sectionSpacing)}>
            <div className={classes.recipeTopSection}>
              <div className={classes.intro}>
                <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
              </div>
              <div className={classes.adSection}>
                {/*<img className='placeholder'/>*/}
                <div className={classes.placeholder}></div>
              </div>
            </div>
          </div>

          <div className={cn(utils.containedSection, utils.sectionSpacing)}>
          <div className={classes.recipeSection}>
            <h2 className={cn(utils.headline2, classes.recipeName)}>{recipeTitle}</h2>
            <div className={classes.specs}>
              <div className={classes.specItem}>
                <p className={classes.primary}>Difficulty</p>
                <p className={classes.secondary}>{difficulty}</p>
              </div>
              <div className={classes.specItem}>
                <p className={classes.primary}>Time</p>
                <p className={classes.secondary}>{time}</p>
              </div>
              <div className={classes.specItem}>
                <p className={classes.primary}>Serves</p>
                <p className={classes.secondary}>{servings}</p>
              </div>
            </div>
            <div className={cn(classes.recipeContentSection, utils.flexboxGridContainer)}>
              <div className={cn(classes.ingredientsSection, utils.flexboxGridChild)}>
                <h3 className={classes.title}>Ingredients</h3>
                <ul className={classes.ingredients}>
                  {
                    ingredients.map((x, i) => {
                      const {
                        ingredient: {
                          amount,
                          name,
                        },
                      } = x;
                      return (
                        <li key={`${name}-${i}`}>
                          <span className={classes.quantity}>{amount}</span>
                          <span className={classes.ingredient}>{name}</span>
                        </li>
                      );
                    })
                  }
                </ul>
              </div>
              <div className={cn(classes.stepsSection, utils.flexboxGridChild)}>
                <h3 className={classes.title}>Recipe</h3>
                <ol>
                  {
                    steps.map(({ step }, i) => (
                      <li key={`step-${i}`}>{ step }</li>
                    ))
                  }
                </ol>
              </div>
            </div>
          </div>
        </div>
        </article>

        <div className={cn(classes.underRecipeAd, utils.containedSection, utils.sectionSpacing)}>
          <div className={classes.placeholder}></div>
        </div>

        {
          relatedRecipes.length && (
            <div className={cn(classes.moreRecipes, utils.containedSection, utils.sectionSpacing)}>
              <CardGrid cardGridTitle="More recipes">
                {
                  relatedRecipes.map(({recipeTitle, thumbnail, difficulty, time, id }) => (
                    <Card
                      cardTitle={recipeTitle}
                      cardBottomInfo={[
                        {title: 'Time', subtitle: time},
                        {title: 'Difficulty', subtitle: difficulty},
                      ]}
                      cardImage={thumbnail}
                      cardLink={`/recipe/${id}`}
                      key={id}
                    />
                  ))
                }
              </CardGrid>
            </div>
          )
        }
      </div>
    </Layout>
  );
}

Recipe.propTypes = {
  recipeTitle: PropTypes.string,
  publishDate: PropTypes.string,
  heroImage: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
  }),
  contentHtml: PropTypes.node,
  difficulty: PropTypes.string,
  time: PropTypes.string,
  servings: PropTypes.string,
  ingredients: PropTypes.arrayOf(PropTypes.shape({
    ingredient: PropTypes.shape({
      amount: PropTypes.string,
      name: PropTypes.string,
    }),
  })),
  steps: PropTypes.arrayOf(PropTypes.shape({
    step: PropTypes.string,
  })),
  relatedRecipes: PropTypes.arrayOf(PropTypes.shape({
    recipeTitle: PropTypes.string,
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

Recipe.defaultProps = {
  title: '',
  publishDate: '',
  heroImage: {},
  contentHtml: null,
  difficulty: '',
  time: '',
  servings: '',
  ingredients: [],
  steps: [],
  relatedRecipes: [],
};

export async function getStaticPaths() {
  const paths = getAllPostIds('recipe');
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData({type: 'recipe', id: params.id });

  const relatedRecipes = postData.related && postData.related.map((postSlug) => (
    getPostDataNoBody({ type: 'recipe', id: postSlug })
  ));
  return {
    props: {
      ...postData,
      ...(relatedRecipes ? { relatedRecipes } : {} ),
    },
  };
}

export default Recipe;
