import Head from 'next/head';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { getAllPostIds, getPostData } from '../../lib/posts'
import { Hero, DescriptionCard, Layout } from '../../components';
import classes from '../../styles/pages/blog.module.scss';
import utils from '../../styles/utils.module.scss';

const array = [1, 2, 3];

const Blog = ({
  title,
  date,
  contentHtml,
  thumbnail,
}) => {
  const dateObject = new Date(date);
  return (
    <Layout>
      <Head>
        <title>Title</title>
      </Head>
      <div className={classes.recipePage}>
        <div className={utils.sectionSpacing}>
          <Hero
            heroHeadline={title}
            heroPostText={dateObject.toDateString()}
            image={thumbnail}
          />
        </div>

        <article>
          <div className={cn(utils.containedSection, utils.sectionSpacing)}>
            <div className={classes.blogSection}>
              <div className={classes.blogContent}>
                {/* <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi est sit amet facilisis magna etiam tempor orci. Amet est placerat in egestas erat imperdiet sed euismod nisi. Adipiscing diam donec adipiscing tristique risus nec feugiat. Viverra maecenas accumsan lacus vel facilisis volutpat est velit. Mollis aliquam ut porttitor leo a diam. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Dui faucibus in ornare quam viverra orci sagittis. Egestas tellus rutrum tellus pellentesque. Et pharetra pharetra massa massa ultricies mi. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Tincidunt dui ut ornare lectus sit amet est placerat in. Non pulvinar neque laoreet suspendisse interdum consectetur libero id. In hac habitasse platea dictumst vestibulum rhoncus est pellentesque.
                </p>
                <div className={classes.placeholder}></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi est sit amet facilisis magna etiam tempor orci. Amet est placerat in egestas erat imperdiet sed euismod nisi. Adipiscing diam donec adipiscing tristique risus nec feugiat. Viverra maecenas accumsan lacus vel facilisis volutpat est velit. Mollis aliquam ut porttitor leo a diam. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Dui faucibus in ornare quam viverra orci sagittis. Egestas tellus rutrum tellus pellentesque. Et pharetra pharetra massa massa ultricies mi. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Tincidunt dui ut ornare lectus sit amet est placerat in. Non pulvinar neque laoreet suspendisse interdum consectetur libero id. In hac habitasse platea dictumst vestibulum rhoncus est pellentesque.
                  <br/><br/>
                  Et tortor at risus viverra adipiscing. Volutpat est velit egestas dui id. Non blandit massa enim nec dui nunc mattis enim ut. Mi bibendum neque egestas congue quisque egestas. Aliquet sagittis id consectetur purus ut faucibus pulvinar. Convallis aenean et tortor at risus viverra adipiscing at in. Adipiscing elit pellentesque habitant morbi tristique senectus et netus. Elit at imperdiet dui accumsan sit amet nulla facilisi morbi. Enim diam vulputate ut pharetra sit amet aliquam id diam. Nec feugiat in fermentum posuere.
                </p>
                <div className={classes.placeholder}></div>*/}
                <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
              </div>
              <div className={classes.adSection}>
                <div className={classes.placeholder}></div>
              </div>
            </div>
          </div>
        </article>

        <div className={cn(classes.underBlogAd, utils.containedSection, utils.sectionSpacing)}>
          <div className={classes.placeholder}></div>
        </div>

        <div className={cn(utils.containedSection, utils.sectionSpacing, classes.moreBlogPosts)}>
          <h2>More blog posts</h2>
          {
            array.map((cardNum) => (
              <DescriptionCard
                cardTitle={`Blog title ${cardNum}`}
                key={`key${cardNum}`}
                cardImage="https://picsum.photos/id/1045/1000/500"
                cardLink="/blog/blog2"
              />
          ))
          }
        </div>
      </div>
    </Layout>
  );
}

Blog.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  contentHtml: PropTypes.node,
  thumbnail: PropTypes.string,
};

Blog.defaultProps = {
  title: '',
  date: '',
  contentHtml: null,
  thumbnail: '',
};

export async function getStaticPaths() {
  const paths = getAllPostIds('blog');
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData('blog', params.id);
  return {
    props: {
      ...postData,
    },
  };
}

export default Blog;
