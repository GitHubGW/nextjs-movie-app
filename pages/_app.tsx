import "../styles/reset.css";
import "../styles/globals.css";
import { AppProps } from "next/app";
import Layout from "../components/layout";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
