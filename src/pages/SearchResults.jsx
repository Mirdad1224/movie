import { useParams } from 'react-router-dom'
import MovieList from '../components/MovieList'

const SearchResults = () => {

    const params = useParams()
    const userInput = params.userInput
    const url = `https://api.themoviedb.org/3/search/movie?query=${userInput}&`

  return (
    <MovieList url={url} />
  )
}

export default SearchResults