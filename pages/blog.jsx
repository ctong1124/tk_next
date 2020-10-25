import Head from 'next/head';
import utilStyles from '../styles/utils.module.scss';
import Link from 'next/link';
import cn from 'classnames';
import { getSortedPostsData } from '../lib/posts'
import classes from '../styles/pages/blogArchive.module.scss';
import { Layout, DescriptionCard } from '../components';

const array = [1, 2, 3, 4, 5, 6];

const BlogArchive = ({
  allPostsData,
}) => {
  console.log('allPostsData');
  return (
    <Layout>
      <div className={cn(utilStyles.containedSection, utilStyles.sectionSpacing, classes.blogArchivePage)}>
        <h1>All blog posts</h1>
        {
          allPostsData.map((post, i) => (
            <DescriptionCard
              cardTitle={post.title}
              key={`${post.title}-${i}`}
              cardImage={post.thumbnail}
              cardLink={`blog/${post.id}`}
            />
        ))
        }
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const allPostsData = getSortedPostsData('blog');
  console.log('allPostsData', allPostsData);
  return {
    props: {
      allPostsData
    }
  };
};

export default BlogArchive;
