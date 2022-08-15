import MovieList from "../components/MovieList"

const url = 'https://api.themoviedb.org/3/movie/upcoming?'

const Upcoming = () => {
    return (
      <div className="w-full">
      <MovieList url={url} />
      </div>
    )
}

export default Upcoming