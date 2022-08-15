import MovieList from "../components/MovieList"

const url = 'https://api.themoviedb.org/3/trending/movie/week?'

const Trends = () => {
  return (
    <div className="w-full">
    <MovieList url={url} />
    </div>
  )
}

export default Trends