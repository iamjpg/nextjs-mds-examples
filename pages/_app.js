import Layout from '../components/layout';

import '@moxiworks/mds-alpha/dist/styles/mds-core.css';
import '../styles/globals.css';
import '../styles/kendo-ui.css';
import '../styles/kendo-overrides.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
