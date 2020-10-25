import Head from 'next/head';
import Link from 'next/link';
import cn from 'classnames';
import { Layout, /*Hero, CardGrid, Card,  Button, DescriptionCard */} from '../components';
import Fade from 'react-reveal/Fade';
import classes from '../styles/pages/aboutPage.module.scss';
import utils from '../styles/utils.module.scss';

const AboutPage = ({
  // allPostsData,
}) => {
  return (
    <Layout>
      <div className={classes.aboutPage}>
        <div className={classes.section1}>
          <h1>Welcome to Tong's Kitchen</h1>
          <Fade bottom fraction={0.1}>
          <div className={classes.image1}>
            <div className={classes.aspectRatioBox}>
              <div className={classes.imageContainer}>
                <img src="https://picsum.photos/id/1045/1000/500"/>
              </div>
            </div>
          </div>
        </Fade>
        </div>
        <div className={cn(classes.textSection, classes.section2)}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempus ornare nisl id consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur in maximus mauris. Integer sollicitudin molestie ex sed dictum. Pellentesque tristique, velit sed egestas vestibulum, nulla mi dignissim elit, ac condimentum lacus nisl a augue.</p>
        </div>
        <Fade bottom fraction={0.1}>
        <div className={classes.section3}>

          <div className={classes.image2}>
            <div className={classes.aspectRatioBox}>
              <div className={classes.imageContainer}>
                <img src="https://picsum.photos/id/1045/500/1000"/>
              </div>
            </div>
          </div>

          <div className={classes.image3}>
            <div className={classes.aspectRatioBox}>
              <div className={classes.imageContainer}>
                <img src="https://picsum.photos/id/1014/600/400"/>
              </div>
            </div>
          </div>

        </div>
        </Fade>
        <div className={cn(classes.textSection, classes.section4)}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempus ornare nisl id consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur in maximus mauris. Integer sollicitudin molestie ex sed dictum. Pellentesque tristique, velit sed egestas vestibulum, nulla mi dignissim elit, ac condimentum lacus nisl a augue.</p>
        </div>
      </div>

    </Layout>
  )
};

export default AboutPage;
