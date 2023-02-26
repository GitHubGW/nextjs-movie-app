import { NextPage } from "next";
import PageTitle from "../components/page-title";

const NotFound: NextPage = () => {
  return (
    <div>
      <PageTitle title="Not Found" />
      <h1>404 Page</h1>
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

export default NotFound;
