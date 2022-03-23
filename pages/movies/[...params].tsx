import { GetServerSidePropsContext } from "next";
import PageTitle from "../../components/page-title";

interface MovieDetailParams {
  params: [string, string, string];
}

const MovieDetail = ({ params }: MovieDetailParams) => {
  const [title, id, posterPath] = params;

  return (
    <div>
      <PageTitle title={title || ""} />
      <img src={`https://image.tmdb.org/t/p/w500/${posterPath}`} alt="" />
      <h1>{title}</h1>
      <style jsx>{`
        div {
          max-width: 500px;
          margin: 0 auto;
        }
        img {
          border-radius: 20px;
          border: 1px solid #f5f5f5;
        }
        h1 {
          font-size: 30px;
          font-weight: 600;
          margin-top: 22px;
        }
      `}</style>
    </div>
  );
};

export const getServerSideProps = (context: GetServerSidePropsContext) => {
  return { props: { params: context.query.params } };
};

export default MovieDetail;
