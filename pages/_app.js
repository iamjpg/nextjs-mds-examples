import Layout from '../components/layout';

import '@moxiworks/mds-alpha/dist/styles/mds-core.css';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
