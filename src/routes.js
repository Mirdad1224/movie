import Favorite from "./pages/Favorite";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Popular from "./pages/Popular";
import SearchResults from "./pages/SearchResults";
import SingleMovie from "./pages/SingleMovie";
import Toprated from "./pages/Toprated";
import Trends from "./pages/Trends";
import Upcoming from "./pages/Upcoming";


const routes = [
    {path: '/', element: <Home />},
    {path: 'popular', element: <Popular />},
    {path: 'upcoming', element: <Upcoming />},
    {path: 'toprated', element: <Toprated />},
    {path: 'trends', element: <Trends />},
    {path: 'favorite', element: <Favorite />},
    {path: 'movie/:id', element: <SingleMovie />},
    {path: 'search/:userInput', element: <SearchResults />},
    {path: '*', element: <NotFound />},
]

export default routes;