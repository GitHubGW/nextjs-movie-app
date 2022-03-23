import { NextPage } from "next";

const NotFound: NextPage = () => {
  return (
    <div>
      <h1>404 Page</h1>{" "}
      <style jsx>{`
        h1 {
          margin-top: 50px;
          font-size: 18px;
          font-style: italic;
        }
      `}</style>
    </div>
  );
};

export default NotFound;
