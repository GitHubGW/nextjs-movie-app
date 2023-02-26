import { NextPage } from "next";
import PageTitle from "../components/page-title";

const About: NextPage = () => {
  return (
    <div>
      <PageTitle title="About" />
      <h1>Your success is up to your efforts.</h1>
      <style jsx>
        {`
          h1 {
            margin-top: 50px;
            font-size: 18px;
            font-style: italic;
          }
        `}
      </style>
    </div>
  );
};

export default About;
