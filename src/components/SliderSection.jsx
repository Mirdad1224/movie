import useHttp from "../hooks/useHttp";
import { useEffect, useState, useCallback } from "react";
import CustomSlider from "./CustomSlider";
import Error from './Error';
import Loading from './Loading';


const SliderSection = ({ url, title }) => {
  const [movieData, setMovieData] = useState(null);
  const { isLoading, error, sendRequest } = useHttp();
  let outputData;

  const applyData = useCallback((data) => {
    setMovieData(data);
  }, []);

  useEffect(() => {
    sendRequest({ url }, applyData);
  }, [sendRequest, url, applyData]);

  (
    !isLoading &&
      !error &&
      movieData &&
      (outputData = <CustomSlider movies={movieData.results} />)
  )

  return (
    <>
    {!!error &&  <Error />}
    {isLoading && <Loading />}
    <div className="mx-2 mt-8 mb-16">
      <h3 className="text-center text-yellow-700 dark:text-yellow-100">
        {title}
      </h3>
      <div className="flex justify-center mb-8 mt-1">
        <span className=" w-32 h-1 bg-red-500 rounded-lg"></span>
      </div>
      {outputData}
    </div>
    </>
  );
};

export default SliderSection;
