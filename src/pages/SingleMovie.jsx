import useHttp from "../hooks/useHttp";
import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import MovieList from "../components/MovieList";
import Error from "./../components/Error";
import Loading from "./../components/Loading";

const SingleMovie = () => {
  const params = useParams();

  const movieId = params.id;

  const url = `https://api.themoviedb.org/3/movie/${movieId}?`;

  const recommendedURL = `https://api.themoviedb.org/3/movie/${movieId}/recommendations?`;

  const [movieData, setMovieData] = useState(null);
  const { isLoading, error, sendRequest } = useHttp();
  let outputData;

  const applyData = useCallback((data) => {
    setMovieData(data);
  }, []);

  useEffect(() => {
    sendRequest({ url }, applyData);
  }, [sendRequest, url, applyData]);

  isLoading && (outputData = <Loading />);

  !!error && (outputData = <Error />);

  !isLoading &&
    !error &&
    movieData &&
    (outputData = (
      <div className="w-full flex flex-col md:flex-row px-4 gap-1 xl:px-40">
        <div className="w-full md:w-1/2 h-1/2">
          <img
            src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
            alt="movie"
            className="w-full md:w-3/4 h-full md:h-3/4 rounded shadow-lg"
          />
        </div>
        <div className="text-gray-500 dark:text-cyan-50 w-full md:w-2/3 shadow-lg p-4">
          <div
            className="flex flex-col md:flex-row gap-1 items-start md:items-center justify-start md:justify-between p-1 border-b
               border-gray-300 mb-8"
          >
            <h4 className="font-medium">نام فیلم</h4>
            <h4 className="text-left">{movieData.title}</h4>
          </div>
          <div
            className="flex items-center justify-between p-1 border-b
               border-gray-300 mb-8"
          >
            <h4 className="font-medium">تاریخ پخش</h4>
            <p className="text-left">{movieData.release_date}</p>
          </div>
          <div
            className="flex items-start gap-3 justify-between p-1 border-b
               border-gray-300 mb-8"
          >
            <h4 className="font-medium">داستان</h4>
            <p className="text-left leading-7 xl:leading-10">
              {movieData.overview}
            </p>
          </div>
          <div
            className="flex items-center justify-between p-1 border-b
               border-gray-300 mb-8"
          >
            <h4 className="font-medium">مدت زمان فیلم (دقیقه)</h4>
            <p className="text-left">{movieData.runtime}</p>
          </div>
        </div>
      </div>
    ));

  return (
    <div className="container">
      {outputData}
      <h3 className="text-center mt-16 text-yellow-700 dark:text-yellow-100">
        فیلم های مرتبط
      </h3>
      <div className="flex justify-center mb-8 mt-1">
        <span className=" w-32 h-1 bg-red-500 rounded-lg"></span>
      </div>
      <MovieList url={recommendedURL} />
    </div>
  );
};

export default SingleMovie;
