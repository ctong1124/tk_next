import Head from 'next/head';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { getAllPostIds, getPostData, getPostDataNoBody } from '../../lib/posts'
import { Hero, DescriptionCard, Layout } from '../../components';
import classes from '../../styles/pages/blog.module.scss';
import utils from '../../styles/utils.module.scss';

const Blog = ({
  blogTitle,
  publishDate,
  contentHtml,
  heroImage,
  relatedPosts,
}) => {
  const dateObject = new Date(publishDate);
  return (
    <Layout>
      <Head>
        <title>blogTitle</title>
      </Head>
      <div className={classes.recipePage}>
        <div className={utils.sectionSpacing}>
          <Hero
            heroHeadline={blogTitle}
            heroPostText={dateObject.toDateString()}
            image={heroImage}
          />
        </div>

        <article>
          <div className={cn(utils.containedSection, utils.sectionSpacing)}>
            <div className={classes.blogSection}>
              <div className={classes.blogContent}>
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
          relatedPosts.length ? (
            <div className={cn(utils.containedSection, utils.sectionSpacing, classes.moreBlogPosts)}>
              <h2>More blog posts</h2>
              {
                relatedPosts.map((post, i) => {
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
          ) : null
        }
      </div>
    </Layout>
  );
}

Blog.propTypes = {
  blogTitle: PropTypes.string,
  publishDate: PropTypes.string,
  contentHtml: PropTypes.node,
  heroImage: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
  }),
  relatedPosts: PropTypes.arrayOf(PropTypes.shape({
    entryTitle: PropTypes.string,
    blogTitle: PropTypes.string,
    publishDate: PropTypes.string,
    thumbnail: PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
      title: PropTypes.string,
    }),
    description: PropTypes.string,
  })),
};

Blog.defaultProps = {
  title: '',
  publishDate: '',
  contentHtml: null,
  heroImage: {},
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
