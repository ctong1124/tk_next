import Head from 'next/head';
import PropTypes from 'prop-types';
import Link from 'next/link';
import cn from 'classnames';
import { getYamlData } from '../lib/posts'
import { Layout } from '../components';
import Fade from 'react-reveal/Fade';
import classes from '../styles/pages/aboutPage.module.scss';
import utils from '../styles/utils.module.scss';

const AboutPage = ({
  images,
  title,
  bodyText1,
  bodyText2,
}) => {
  const { heroImage, gridImage1, gridImage2 } = images;
  return (
    <Layout>
      <div className={classes.aboutPage}>
        <div className={classes.section1}>
          <h1>{title}</h1>
          <Fade bottom fraction={0.1}>
          <div className={classes.image1}>
            <div className={classes.aspectRatioBox}>
              <div className={classes.imageContainer}>
                <img src={heroImage}/>
              </div>
            </div>
          </div>
        </Fade>
        </div>
        <div className={cn(classes.textSection, classes.section2)}>
          <p>{bodyText1}</p>
        </div>
        <Fade bottom fraction={0.1}>
        <div className={classes.section3}>

          <div className={classes.image2}>
            <div className={classes.aspectRatioBox}>
              <div className={classes.imageContainer}>
                <img src={gridImage1}/>
              </div>
            </div>
          </div>

          <div className={classes.image3}>
            <div className={classes.aspectRatioBox}>
              <div className={classes.imageContainer}>
                <img src={gridImage2}/>
              </div>
            </div>
          </div>

        </div>
        </Fade>
        <div className={cn(classes.textSection, classes.section4)}>
          <p>{bodyText2}</p>
        </div>
      </div>
    </Layout>
  )
};

AboutPage.propTypes = {
  images: PropTypes.shape({
    heroImage: PropTypes.string,
    gridImage1: PropTypes.string,
    gridImage2: PropTypes.string,
  }),
  title: PropTypes.string,
  bodyText1: PropTypes.string,
  bodyText2: PropTypes.string,
};

AboutPage.defaultProps = {
  images: {},
  title: PropTypes.string,
  bodyText1: PropTypes.string,
  bodyText2: PropTypes.string,
};

export async function getStaticProps() {
  const aboutPageData = getYamlData('/data/pages/aboutPage.md');
  return {
    props: {
      ...aboutPageData,
    },
  };
}

export default AboutPage;
