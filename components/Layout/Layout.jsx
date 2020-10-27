import Head from 'next/head';
import styles from './Layout.module.scss';
import utilStyles from '../../styles/utils.module.scss';
import Link from 'next/link';
import Header from '../Header';
import Footer from '../Footer';
import classes from './Layout.module.scss';

const NAME = 'CARISA';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/images/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content="title" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <Header />
      <div className={classes.layoutBody}>
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
};

export default Layout;
