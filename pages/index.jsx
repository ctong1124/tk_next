import Head from 'next/head';
import Link from 'next/link';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Hero, CardGrid, Card, Layout, Button, DescriptionCard } from '../components';
import { getSortedPostsData, getYamlData, getPostDataNoBody } from '../lib/posts'
import classes from '../styles/pages/homePage.module.scss';
import utils from '../styles/utils.module.scss';

const HomePage = ({
  hero,
  featuredRecipes,
  latestRecipes,
  latestBlogPosts,
  adsOn,
}) => {
  return (
    <Layout home>
      { /* HERO */
        Object.keys(hero).length && (
          <div className={utils.sectionSpacing}>
            <Hero
              heroHeadline={hero.recipeTitle}
              heroPostText='View recipe'
              heroLink={`/recipe/${hero.id}`}
              image={hero.heroImage}
            />
          </div>
        )
      }
      <div className={utils.containedSection}>
        { /* FEATURED RECIPES */
          featuredRecipes.length && (
            <div className={cn(utils.sectionSpacing, classes.descriptionCardGrid)}>
              <h2>Featured recipes</h2>
              <div className={cn(utils.flexboxGridContainer, classes.descriptionCardGridFlex)}>
                <div className={cn(utils.flexboxGridChild, classes.cardSection)}>
                  {
                    featuredRecipes.map(({
                      recipeTitle,
                      description,
                      thumbnail,
                      difficulty,
                      time,
                      id
                    }, i) => (
                      <DescriptionCard
                        cardTitle={recipeTitle}
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
                <div className={cn(classes.adSection, utils.flexboxGridChild, {[classes.adsOff]: !adsOn})}>
                  <div className={classes.placeholder}></div>
                </div>
              </div>
            </div>
          )
        }

        { /* LATEST RECIPES */
          latestRecipes.length && (
            <div className={cn(utils.sectionSpacing)}>
              <CardGrid cardGridTitle="Latest recipes">
                {
                  latestRecipes.map(({recipeTitle, thumbnail, difficulty, time, id }) => (
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
              <Button text="See all" link="/recipes"/>
            </div>
          )
        }

        { /* LATEST BLOG POSTS */
          latestBlogPosts.length && (
            <div className={cn(utils.sectionSpacing, classes.descriptionCardGrid)}>
              <h2>Latest blog posts</h2>
              <div className={cn(utils.flexboxGridContainer, classes.descriptionCardGrid, classes.descriptionCardGridFlex)}>
                <div className={cn(utils.flexboxGridChild, classes.cardSection)}>
                  {
                    latestBlogPosts.map((post, i) => {
                      const {
                        entryTitle, blogTitle, publishDate, description, thumbnail, id,
                      } = post;
                      const dateObject = new Date(publishDate);
                      return (
                        <DescriptionCard
                          cardTitle={blogTitle}
                          cardSubtitle={dateObject.toDateString()}
                          cardDescription={description}
                          key={`${entryTitle}-${i}`}
                          cardImage={thumbnail}
                          cardLink={`/blog/${id}`}
                        />
                      )
                    })
                  }
                </div>
                <div className={cn(classes.adSection, utils.flexboxGridChild, {[classes.adsOff]: !adsOn})}>
                  <div className={classes.placeholder}></div>
                </div>
              </div>
              <Button text="See all" link="/blog"/>
            </div>
          )
        }
      </div>
    </Layout>
  )
};

HomePage.propTypes = {
  hero: PropTypes.shape({
    recipeTitle: PropTypes.string,
    id: PropTypes.string,
    heroImage: PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
      title: PropTypes.string,
    }),
  }),
  featuredRecipes: PropTypes.arrayOf(PropTypes.shape({
    recipeTitle: PropTypes.string,
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
  latestRecipes: PropTypes.arrayOf(PropTypes.shape({
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
  latestBlogPosts: PropTypes.arrayOf(PropTypes.shape({
    entryTitle: PropTypes.string,
    blogTitle: PropTypes.string,
    publishDate: PropTypes.string,
    description: PropTypes.string,
    thumbnail: PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
      title: PropTypes.string,
    }),
    id: PropTypes.string,
  })),
  adsOn: PropTypes.boolean,
};

HomePage.defaultProps = {
  hero: {},
  featuredRecipes: [],
  latestRecipes: [],
  latestBlogPosts: [],
  adsOn: false,
};

export async function getStaticProps() {
  const latestRecipes = getSortedPostsData({ type: 'recipe', n: 6 });
  const latestBlogPosts = getSortedPostsData({ type: 'blog', n: 3 })

  const homePageData = getYamlData('/data/pages/homePage.md');
  const hero = homePageData.hero && getPostDataNoBody({type: 'recipe', id: homePageData.hero});
  const featuredRecipes = homePageData.featuredRecipes && homePageData.featuredRecipes.map((postSlug) => (
    getPostDataNoBody({ type: 'recipe', id: postSlug })
  ));
  return {
    props: {
      latestRecipes,
      latestBlogPosts,
      ...(hero ? { hero } : {}),
      ...(featuredRecipes ? { featuredRecipes } : {} ),
    },
  };
}

export default HomePage;
