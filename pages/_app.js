import App from "next/app";
import Page from "components/Page";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Page>
        <Component {...pageProps} />
      </Page>
    </React.Fragment>
  );
}

export default MyApp;
