import { useState } from "react";
import { useRoutes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import routes from "./routes";
import FavoriteContext from "./store/favoriteContext";

let defaultFavoriteArray = JSON.parse(localStorage.getItem('favoriteMovies'))
  if(!defaultFavoriteArray) {
    defaultFavoriteArray = []
  }

  let mode = localStorage.getItem('mode')
  if(!mode) {
    mode = 'light'
  }
  

function App() {
  const router = useRoutes(routes);
  
  const [favoriteArray, setFavoriteArray] = useState(defaultFavoriteArray)

  const [currentMode, setCurrentMode] = useState(mode)

  const changeMode = (value) => {
    setCurrentMode(value)
  }

  return (
    <FavoriteContext.Provider value={{favoriteArray, setFavoriteArray}}>
      <div className={`${currentMode === 'light' ? '' : 'dark'}`}>
        <div className="overflow-x-hidden bg-custom w-full min-h-screen dark:bg-secondary">
          <Header onMode={changeMode} />
          <Search />
          {router}
          <Footer />
          <Navbar />
        </div>
      </div>
    </FavoriteContext.Provider>
  );
}

export default App;
