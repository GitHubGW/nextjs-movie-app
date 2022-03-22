import { NextPage } from "next";
import PageTitle from "../components/page-title";

const About: NextPage = () => {
  return (
    <div>
      <PageTitle title="About" />
      <h1 className="active">About</h1>
    </div>
  );
};

export default About;
