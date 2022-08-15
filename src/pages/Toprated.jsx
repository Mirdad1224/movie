import MovieList from "../components/MovieList"

const url = 'https://api.themoviedb.org/3/movie/top_rated?'

const Toprated = () => {
  return (
    <div className="w-full">
    <MovieList url={url} />
    </div>
  )
}

export default Toprated