import { AppProps } from "next/app";
import Nav from "../components/nav";
import "../styles/reset.css";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Nav />
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
