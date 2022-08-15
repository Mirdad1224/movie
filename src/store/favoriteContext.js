import { createContext } from "react";

const FavoriteContext = createContext({
  favoriteArray: [],
  setFavoriteArray: () => {},
});
export default FavoriteContext;

// const FavoriteProvider = ({children}) => {

//     <FavoriteContext.Provider>
//         {children}
//     </FavoriteContext.Provider>
// }

// export default FavoriteProvider
