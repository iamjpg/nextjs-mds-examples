import Layout from "../components/layout";
import { useState, useEffect } from "react";

import "@moxiworks/mds-alpha/dist/styles/mds-core.css";
import "../styles/globals.css";
import "../styles/kendo-ui.css";
import "../styles/kendo-overrides.css";

export default function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
