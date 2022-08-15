import useHttp from '../hooks/useHttp'
import { useEffect, useState, useCallback } from "react";
import Card from './Card'
import Error from './Error';
import Loading from './Loading';

const MovieList = ({url}) => {

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
        (outputData = (movieData.results.length ? (movieData.results.map(movie => (
            <Card key={movie.id} id={movie.id} rate={movie.vote_average}
            title={movie.title}
            src={movie.poster_path}
            slider={0} />
        ))) : <p className='text-center h-80 text-red-300'>موردی یافت نشد</p>) )
    )

  return (
    <>
    {!!error &&  <Error />}
    {isLoading && <Loading />}
    <div className='w-5/6 mx-auto my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
     xl:grid-cols-4 gap-6 '>{outputData}</div>
     </>
  )
}

export default MovieList