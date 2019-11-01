
import Head from 'next/head';
import Nav from './Nav';
import Footer from './Footer';

const Layout = (props) => (
  <>
    <Head>
      <title>My first NextJS project</title>
      <link rel="stylesheet" href="https://bootswatch.com/4/cosmo/bootstrap.min.css" />
    </Head>
    <Nav />
      { props.children }
    <Footer />
  </>
);
export default Layout;
