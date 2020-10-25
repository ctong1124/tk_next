import Head from 'next/head';
import utilStyles from '../styles/utils.module.scss';
import Link from 'next/link';
import cn from 'classnames';
import classes from '../styles/pages/blogArchive.module.scss';
import { Layout, DescriptionCard } from '../components';

const array = [1, 2, 3, 4, 5, 6];

const BlogArchive = () => {
  return (
    <Layout>
      <div className={cn(utilStyles.containedSection, utilStyles.sectionSpacing, classes.blogArchivePage)}>
        <h1>All blog posts</h1>
        {
          array.map((cardNum) => (
            <DescriptionCard
              cardTitle={`Blog post ${cardNum}`}
              key={`key${cardNum}`}
              cardImage="https://picsum.photos/id/1045/1000/500"
              cardLink="/blog/blog1"
            />
        ))
        }
      </div>
    </Layout>
  );
};

export default BlogArchive;
