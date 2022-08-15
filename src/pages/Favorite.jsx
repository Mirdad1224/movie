import FavoriteContext from "../store/favoriteContext";
import { useContext } from "react";
import Card from "../components/Card";

const Favorite = () => {
  const favoriteState = useContext(FavoriteContext);

  return (
    <>
      {favoriteState.favoriteArray.length === 0 && (
        <div className="flex items-center justify-center w-full h-80">
          <p className="text-lg font-normal text-red-300">
            هیچ فیلمی در این لیست وجود ندارد
          </p>
        </div>
      )}
      {favoriteState.favoriteArray.length > 0 && (
        <div
          className="w-5/6 mx-auto my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
      xl:grid-cols-4 gap-6 "
        >
          {favoriteState.favoriteArray.map(movie => (
          <Card
            key={movie.id}
            id={movie.id}
            rate={movie.rate}
            title={movie.title}
            src={movie.src}
            slider={0}
          />
          ))}
        </div>
      )}
    </>
  );
};

export default Favorite;
