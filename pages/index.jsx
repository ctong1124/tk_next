import Head from 'next/head';
import Link from 'next/link';
import cn from 'classnames';
import { Hero, CardGrid, Card, Layout, Button, DescriptionCard } from '../components';
import { getSortedPostsData } from '../lib/posts'
import classes from '../styles/pages/homePage.module.scss';
import utils from '../styles/utils.module.scss';

const HomePage = ({
  allPostsData,
}) => {
  console.log('getStaticProps', allPostsData);
  return (
    <Layout home>
      <div className={utils.sectionSpacing}>
        <Hero
          heroHeadline='Hero headline'
          heroPostText='View recipe'
        />
      </div>
      <div className={utils.containedSection}>
        <div className={cn(utils.sectionSpacing, classes.featuredRecipes)}>
          <h2>Featured recipes</h2>
          <div className={cn(utils.flexboxGridContainer, classes.featuredRecipesFlex)}>
            <div className={cn(utils.flexboxGridChild, classes.cardSection)}>

              <DescriptionCard
                cardTitle={`Card title`}
                cardBottomInfo={[{title: 'Time', subtitle: '20 mins'}, {title: 'Time', subtitle: '20 mins'}]}
                cardImage="https://picsum.photos/id/1045/1000/500"
                cardLink="/recipe/recipe1"
              />
              <DescriptionCard
                cardTitle={`Card title`}
                cardBottomInfo={[{title: 'Time', subtitle: '20 mins'}, {title: 'Time', subtitle: '20 mins'}]}
                cardImage="https://picsum.photos/id/1045/1000/500"
                cardLink="/recipe/recipe1"
              />
              <DescriptionCard
                cardTitle={`Card title`}
                cardBottomInfo={[{title: 'Time', subtitle: '20 mins'}, {title: 'Time', subtitle: '20 mins'}]}
                cardImage="https://picsum.photos/id/1045/1000/500"
                cardLink="/recipe/recipe1"
              />
            </div>
            <div className={cn(classes.adSection, utils.flexboxGridChild)}>
              <div className={classes.placeholder}></div>
            </div>
          </div>
        </div>

        <div className={cn(utils.sectionSpacing)}>
            <CardGrid cardGridTitle="Latest recipes">
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
            <Button text="See all" link="/recipes"/>
          </div>
      </div>

    </Layout>
  )
};

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default HomePage;
