import Head from "next/head";
import "../styles/globals.css";
import "../styles/scss/style.scss";
import "../styles/animation.css";
import { makeQuery, menusQuery, studioQuery } from "../services/api";
// import Header from "../components/Header";

function App({ Component, pageProps, layoutData }) {
  return (
    <>
      <Head>
        <title>{pageProps?.studio?.title_site}</title>
        <meta
          name="og:description"
          content={pageProps?.studio?.description_site}
        />
        <meta
          name="og:viewport"
          content="initial-scale=1.0, width=device-width"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;300;400;500;600;700"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      {/* <Header data={layoutData} {...pageProps} pageProps={pageProps} /> */}

      {layoutData ? <Component {...pageProps} layoutData={layoutData} /> : null}
    </>
  );
}

App.getInitialProps = async () => {
  let { studio } = await makeQuery(studioQuery);
  let { menus } = await makeQuery(menusQuery);

  return {
    layoutData: {
      studio: studio ?? null,
      menus: menus ?? null,
    },
  };
};

export default App;
