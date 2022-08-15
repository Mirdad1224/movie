import { Link } from "react-router-dom";
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import { useContext } from "react";
import FavoriteContext from "../store/favoriteContext";
import NoImage_Available from '../assets/images/NoImage_Available.webp'


const Card = ({ id, rate, title, src, slider }) => {
  const favoriteState = useContext(FavoriteContext);

  

  const likeHandler = (id, rate, title, src) => {
    
    const temporaryArray = [...favoriteState.favoriteArray]
    temporaryArray.push({id, rate, title, src})
    favoriteState.setFavoriteArray(temporaryArray)
    localStorage.setItem('favoriteMovies', JSON.stringify(temporaryArray))
  };

  const unlikeHandler = (id) => {
    
    const index = favoriteState.favoriteArray?.findIndex(item => item.id === id)
    const temporaryArray = [...favoriteState.favoriteArray]
    temporaryArray.splice(index, 1)
    favoriteState.setFavoriteArray(temporaryArray)
    localStorage.setItem('favoriteMovies', JSON.stringify(temporaryArray))
  }
  return (
    <div
      className={`flex justify-center w-full ${
        slider ? "md:w-2/3" : ""
      } mx-auto px-auto h-[650px]`}
    >
      <div className="rounded-lg shadow-2xl bg-white dark:bg-gray-700 w-full flex flex-col gap-1">
        <div className="overflow-hidden w-full h-96">
          <img
            className="rounded-t-lg duration-500 hover:scale-110 w-full h-96"
            src={`${src === null ? `${NoImage_Available}` : `https://image.tmdb.org/t/p/w500${src}`}`}
            alt={title}
          />
        </div>
        <div className="p-2">
          <div className="flex flex-col mb-2">
            <h5 className="text-gray-500 dark:text-slate-100 text-xl font-medium mb-2">
              عنوان :
            </h5>
            <h5 className="text-gray-500 dark:text-slate-100 text-md font-medium mb-2 text-left">
              {title}
            </h5>
          </div>
          <div className="flex items-center justify-between mb-8">
            <p className="text-gray-700 dark:text-slate-100 text-base mb-4">
              امتیاز :
            </p>
            <p className="bg-red-100 text-slate-400 rounded text-base p-1 text-left">
              {Number(rate).toFixed(1)}{" "}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <Link
              to={`/movie/${id}`}
              className=" inline-block px-6 py-2.5 bg-red-500
         text-white font-medium text-xs rounded
          duration-300 hover:bg-red-700
           ease-in-out"
            >
              مشاهده ی جزییات
            </Link>
            {favoriteState.favoriteArray.find((item) => item.id === id) ? (
              <FcLike
                className="text-2xl cursor-pointer"
                onClick={() => unlikeHandler(id)}
              />
            ) : (
              <FcLikePlaceholder
                className="text-2xl cursor-pointer"
                onClick={() => likeHandler(id, rate, title, src)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
