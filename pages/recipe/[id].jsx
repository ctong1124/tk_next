import Head from 'next/head';
import cn from 'classnames';
import { Hero, CardGrid, Card, Layout } from '../../components';
import classes from '../../styles/pages/recipe.module.scss';
import utils from '../../styles/utils.module.scss';

export default function Recipe() {
  return (
    <Layout>
      <Head>
        <title>Title</title>
      </Head>
      <div className={classes.recipePage}>
        <div className={utils.sectionSpacing}>
          <Hero
            heroHeadline='Hero headline'
            heroPostText='Jump to recipe'
          />
        </div>

        <article>
          <div className={cn(utils.containedSection, utils.sectionSpacing)}>
            <div className={classes.recipeTopSection}>
              <div className={classes.intro}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi est sit amet facilisis magna etiam tempor orci. Amet est placerat in egestas erat imperdiet sed euismod nisi. Adipiscing diam donec adipiscing tristique risus nec feugiat. Viverra maecenas accumsan lacus vel facilisis volutpat est velit. Mollis aliquam ut porttitor leo a diam. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Dui faucibus in ornare quam viverra orci sagittis. Egestas tellus rutrum tellus pellentesque. Et pharetra pharetra massa massa ultricies mi. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Tincidunt dui ut ornare lectus sit amet est placerat in. Non pulvinar neque laoreet suspendisse interdum consectetur libero id. In hac habitasse platea dictumst vestibulum rhoncus est pellentesque.
                </p>
                {/*<img className='placeholder'/>*/}
                <div className={classes.placeholder}></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi est sit amet facilisis magna etiam tempor orci. Amet est placerat in egestas erat imperdiet sed euismod nisi. Adipiscing diam donec adipiscing tristique risus nec feugiat. Viverra maecenas accumsan lacus vel facilisis volutpat est velit. Mollis aliquam ut porttitor leo a diam. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Dui faucibus in ornare quam viverra orci sagittis. Egestas tellus rutrum tellus pellentesque. Et pharetra pharetra massa massa ultricies mi. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Tincidunt dui ut ornare lectus sit amet est placerat in. Non pulvinar neque laoreet suspendisse interdum consectetur libero id. In hac habitasse platea dictumst vestibulum rhoncus est pellentesque.
                  <br/><br/>
                  Et tortor at risus viverra adipiscing. Volutpat est velit egestas dui id. Non blandit massa enim nec dui nunc mattis enim ut. Mi bibendum neque egestas congue quisque egestas. Aliquet sagittis id consectetur purus ut faucibus pulvinar. Convallis aenean et tortor at risus viverra adipiscing at in. Adipiscing elit pellentesque habitant morbi tristique senectus et netus. Elit at imperdiet dui accumsan sit amet nulla facilisi morbi. Enim diam vulputate ut pharetra sit amet aliquam id diam. Nec feugiat in fermentum posuere.
                </p>
                {/*<img className='placeholder'/>*/}
                <div className={classes.placeholder}></div>
              </div>
              <div className={classes.adSection}>
                {/*<img className='placeholder'/>*/}
                <div className={classes.placeholder}></div>
              </div>
            </div>
          </div>

          <div className={cn(utils.containedSection, utils.sectionSpacing)}>
          <div className={classes.recipeSection}>
            <h2 className={cn(utils.headline2, classes.recipeName)}>Recipe name</h2>
            <div className={classes.specs}>
              <div className={classes.specItem}>
                <p className={classes.primary}>Difficulty</p>
                <p className={classes.secondary}>Easy</p>
              </div>
              <div className={classes.specItem}>
                <p className={classes.primary}>Time</p>
                <p className={classes.secondary}>30 mins</p>
              </div>
              <div className={classes.specItem}>
                <p className={classes.primary}>Serves</p>
                <p className={classes.secondary}>4-6</p>
              </div>
            </div>
            <div className={cn(classes.recipeContentSection, utils.flexboxGridContainer)}>
              <div className={cn(classes.ingredientsSection, utils.flexboxGridChild)}>
                <h3 className={classes.title}>Ingredients</h3>
                <ul className={classes.ingredients}>
                  <li><span className={classes.quantity}>1</span><span className={classes.ingredient}>head broccoli</span></li>
                  <li><span className={classes.quantity}>12</span><span className={classes.ingredient}>pieces dried scallop</span></li>
                  <li><span className={classes.quantity}>1</span><span className={classes.ingredient}>tsp oyster sauce</span></li>
                  <li><span className={classes.quantity}>1/4</span><span className={classes.ingredient}>tsp sugar</span></li>
                  <li><span className={classes.quantity}>1/4</span><span className={classes.ingredient}>tsp dark soy sauce</span></li>
                  <li><span className={classes.quantity}>2</span><span className={classes.ingredient}>tbsp corn starch</span></li>
                  <li><span className={classes.quantity}>5</span><span className={classes.ingredient}>tbsp water</span></li>
                  <li><span className={classes.quantity}></span><span className={classes.ingredient}>ground white pepper, to taste</span></li>
                  <li><span className={classes.quantity}></span><span className={classes.ingredient}>salt, to taste</span></li>
                </ul>
              </div>
              <div className={cn(classes.stepsSection, utils.flexboxGridChild)}>
                <h3 className={classes.title}>Recipe</h3>
                <ol>
                  <li>Prepare the scallop sauce 3 hours in advance. Soak dried scallops in water for 2 hours. </li>
                  <li>Place broccoli florets on a steaming plate and steam for 5 minutes.  Drain and arrange broccoli to make a large circle on a serving plate.</li>
                  <li>While waiting, heat oil in a wok and add steamed scallops and liquid sauce.  Bring to boil.  Add oyster sauce, dark soy sauce, Chinese cooking wine and sugar.  Taste and adjust seasoning accordingly.  Stir in corn flour mixture to thicken the sauce lightly.</li>
                  <li>Ladle out the scallops and scoop them onto the plate within the broccoli circle. Then pour the sauce over the scallops and serve hot.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        </article>

        <div className={cn(classes.underRecipeAd, utils.containedSection, utils.sectionSpacing)}>
          <div className={classes.placeholder}></div>
        </div>

        <div className={cn(classes.moreRecipes, utils.containedSection, utils.sectionSpacing)}>
          <CardGrid cardGridTitle="More recipes">
            <Card
              cardTitle="Card title"
              cardBottomInfo={[{title: 'Time', subtitle: '20 mins'}, {title: 'Time', subtitle: '20 mins'}]}
              cardImage="https://picsum.photos/id/1045/1000/500"
              cardLink="/recipe/recipe1"
            />
            <Card
              cardTitle="Card title"
              cardBottomInfo={[{title: 'Time', subtitle: '20 mins'}, {title: 'Time', subtitle: '20 mins'}]}
              cardImage="https://picsum.photos/id/1045/1000/500"
              cardLink="/recipe/recipe1"
            />
            <Card
              cardTitle="Card title"
              cardBottomInfo={[{title: 'Time', subtitle: '20 mins'}, {title: 'Time', subtitle: '20 mins'}]}
              cardImage="https://picsum.photos/id/1045/1000/500"
              cardLink="/recipe/recipe1"
            />
          </CardGrid>
        </div>
      </div>
    </Layout>
  );
}
// 
// export async function getStaticPaths() {
//   return {
//     paths: [
//       { params: { id: 'recipe1' } },
//       { params: { id: 'recipe2' } },
//     ],
//     fallback: false,
//   }
// }
//
// export async function getStaticProps({ params }) {
//   return {
//     props: {},
//   };
// }
