import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType, NextPage } from "next";
import PageTitle from "../components/page-title";

interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface MovieData {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

const Home: NextPage = ({ movieData }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div>
      <PageTitle title="Home" />
      <div className="movie_container">
        {movieData?.results.map((movie: Movie) => (
          <div key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
            <h1>{movie.title}</h1>
          </div>
        ))}
      </div>
      <style jsx>{`
        .movie_container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin-top: 15px;
        }
        .movie_container div {
          margin-bottom: 30px;
          width: 250px;
        }
        img {
          width: 250px;
          height: 370px;
          border-radius: 15px;
          cursor: pointer;
          transition: 0.3s;
        }
        img:hover {
          transform: scale(1.05);
        }
        h1 {
          margin-top: 10px;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const movieData: MovieData = await (await fetch("http://localhost:3000/api/movies/popular")).json();
  return { props: { movieData } };
};

export default Home;
