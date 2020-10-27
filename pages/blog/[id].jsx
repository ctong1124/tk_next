import Head from 'next/head';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { getAllPostIds, getPostData, getPostDataNoBody } from '../../lib/posts'
import { Hero, DescriptionCard, Layout } from '../../components';
import classes from '../../styles/pages/blog.module.scss';
import utils from '../../styles/utils.module.scss';

const Blog = ({
  title,
  publishDate,
  contentHtml,
  heroImage,
  relatedPosts,
}) => {
  const dateObject = new Date(publishDate);
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
            image={heroImage}
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
        {
          relatedPosts.length && (
            <div className={cn(utils.containedSection, utils.sectionSpacing, classes.moreBlogPosts)}>
              <h2>More blog posts</h2>
              {
                relatedPosts.map((post, i) => {
                  const {
                    title, publishDate, description, thumbnail, id,
                  } = post;
                  const dateObject = new Date(publishDate);
                  return (
                    <DescriptionCard
                      cardTitle={title}
                      cardSubtitle={dateObject.toDateString()}
                      cardDescription={description}
                      key={`${title}-${i}`}
                      cardImage={thumbnail}
                      cardLink={`/blog/${id}`}
                    />
                  )
                })
              }
            </div>
          )
        }
      </div>
    </Layout>
  );
}

Blog.propTypes = {
  title: PropTypes.string,
  publishDate: PropTypes.string,
  contentHtml: PropTypes.node,
  heroImage: PropTypes.string,
  relatedPosts: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    publishDate: PropTypes.string,
    thumbnail: PropTypes.string,
    description: PropTypes.string,
  })),
};

Blog.defaultProps = {
  title: '',
  publishDate: '',
  contentHtml: null,
  heroImage: '',
  relatedPosts: [],
};

export async function getStaticPaths() {
  const paths = getAllPostIds('blog');
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData({type: 'blog', id: params.id });

  const relatedPosts = postData.related && postData.related.map((postSlug) => (
    getPostDataNoBody({ type: 'blog', id: postSlug })
  ));

  return {
    props: {
      ...postData,
      ...(relatedPosts ? { relatedPosts } : {} ),
    },
  };
}

export default Blog;
