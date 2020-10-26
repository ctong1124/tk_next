import Head from 'next/head';
import PropTypes from 'prop-types';
import utilStyles from '../styles/utils.module.scss';
import Link from 'next/link';
import cn from 'classnames';
import { getSortedPostsData } from '../lib/posts'
import classes from '../styles/pages/blogArchive.module.scss';
import { Layout, DescriptionCard } from '../components';

const BlogArchive = ({
  blogPosts,
}) => {
  return (
    <Layout>
      <div className={cn(utilStyles.containedSection, utilStyles.sectionSpacing, classes.blogArchivePage)}>
        <h1>All blog posts</h1>
        {
          blogPosts.map((post, i) => {
            const {
              title, date, description, thumbnail, id,
            } = post;
            const dateObject = new Date(date);
            return (
              <DescriptionCard
                cardTitle={title}
                cardSubtitle={dateObject.toDateString()}
                cardDescription={description}
                key={`${title}-${i}`}
                cardImage={thumbnail}
                cardLink={`blog/${id}`}
              />
            );
          })
        }
      </div>
    </Layout>
  );
};

BlogArchive.propTypes = {
  blogPosts: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
    thumbnail: PropTypes.string,
    id: PropTypes.string,
  })),
};

BlogArchive.defaultProps = {
  blogPosts: {},
};

export async function getStaticProps() {
  const blogPosts = getSortedPostsData('blog');
  return {
    props: {
      blogPosts,
    }
  };
};

export default BlogArchive;
