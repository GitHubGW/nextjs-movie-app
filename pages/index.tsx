import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType, NextPage } from "next";
import { useRouter } from "next/router";
import { useCallback } from "react";
import PageTitle from "../components/page-title";

interface Movie {
  id: number;
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
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
  const router = useRouter();

  const handleGoMovieDetail = useCallback(
    (movieId: number, movieTitle: string, moviePosterPath: string): void => {
      router.push(`/movies/${movieTitle}/${movieId}${moviePosterPath}`);
    },
    [router]
  );

  return (
    <div>
      <PageTitle title="Home" />
      <div className="movie_container">
        {movieData?.results?.map((movie: Movie) => (
          <div key={movie.id} onClick={() => handleGoMovieDetail(movie.id, movie.title, movie.poster_path)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
            <h2>{movie.title}</h2>
            <h5>⭐️ {Math.ceil(movie.vote_average)}</h5>
          </div>
        ))}
      </div>
      <style jsx>
        {`
          .movie_container {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: repeat(5, 1fr);
            column-gap: 20px;
            row-gap: 30px;
            margin-top: 20px;
            margin-bottom: 30px;
          }
          img {
            width: 100%;
            height: 350px;
            border-radius: 15px;
            cursor: pointer;
            transition: 0.3s;
          }
          img:hover {
            transform: scale(1.03);
          }
          h1 {
            margin-top: 10px;
            font-weight: bold;
          }
          h5 {
            margin-top: 10px;
            font-size: 12px;
            font-weight: bold;
          }
        `}
      </style>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const movieData: MovieData = await (await fetch("http://localhost:3000/api/movies/popular")).json();
  return { props: { movieData } };
};
