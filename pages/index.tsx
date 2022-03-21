import { NextPage } from "next";
import Nav from "../components/nav";

const Home: NextPage = () => {
  return (
    <div>
      <Nav />
      <h1 className="active">Home</h1>
      <style jsx>{`
        a {
          color: red;
        }
        .active {
          color: springgreen;
        }
      `}</style>
    </div>
  );
};

export default Home;
