import SliderSection from "../components/SliderSection"
const nowPlayingURL = 'https://api.themoviedb.org/3/movie/now_playing?'
const popularURL = 'https://api.themoviedb.org/3/movie/popular?'
const upcomingURL = 'https://api.themoviedb.org/3/movie/upcoming?'
const topRatedURL = 'https://api.themoviedb.org/3/movie/top_rated?'
const trendingURL = 'https://api.themoviedb.org/3/trending/movie/week?'


const Home = () => {

  return (
    <>
    <SliderSection url={nowPlayingURL} title='فیلم های در حال پخش' />
    <SliderSection url={popularURL} title='محبوب ترین فیلم ها' />
    <SliderSection url={upcomingURL} title='در دست انتشار' />
    <SliderSection url={topRatedURL} title='فیلم های برتر دنیا' />
    <SliderSection url={trendingURL} title='ترند ها' />
    </>
  )
}

export default Home