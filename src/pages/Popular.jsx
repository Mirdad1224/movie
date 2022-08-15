import MovieList from "../components/MovieList"

const url = 'https://api.themoviedb.org/3/movie/popular?'

const Popular = () => {

  return (
    <div className="w-full">
    <MovieList url={url} />
    </div>
  )
}

export default Popular
