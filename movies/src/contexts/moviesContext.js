import React, { useState } from "react";
import { login, signup, getFavourites, addFavourite, deleteFavourite } from "../api/tmdb-api";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )
  const [isFavoritesLoaded, setFavouriteLoaded] = useState(false)
  const [myReviews, setMyReviews] = useState( {} ) 
  const [mustWatch, setMustWatch] = useState( [] )
  const [user, setUser] = useState( null );
  const existingToken = localStorage.getItem("token");
  const existingUsername = localStorage.getItem("username");
  const existingAuthenticated = localStorage.getItem("authenticated") === "true";
  const [isAuthenticated, setIsAuthenticated] = useState(existingAuthenticated);
  const [authToken, setAuthToken] = useState(existingToken);
  const [userName, setUserName] = useState(existingUsername);

  const addToFavorites = (movie) => {
    let newFavorites = [];
    const id = movie.id.toString();
    if (!favorites.includes(id)){
      newFavorites = [...favorites, id];
    }
    else{
      newFavorites = [...favorites];
    }
    setFavorites(newFavorites)

    addFavourite(userName, id)
  };

  // We will use this function in a later section
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id.toString()
    ) )

    console.log("delete in context", movie.id)
    deleteFavourite(userName, movie.id);
  };

  const loadFavourites = () => {
    // let newFav = []
    // const fav = await getFavourites(userName);
    // console.log("fav", fav)
    // newFav = [...favorites, fav]
    // setFavorites(newFav)
    
    if(!isFavoritesLoaded){
      getFavourites(userName).then((response) => {
        if (response) setFavorites(response);
      });
      setFavouriteLoaded(true);
    }

  }

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };
  // console.log(myReviews);

  const addMustWatch = (movie) => {
    let newMustWatch = [];
    if (!mustWatch.includes(movie.id)){
      newMustWatch = [...mustWatch, movie.id];
    }
    else{
      newMustWatch = [...mustWatch];
    }
    setMustWatch(newMustWatch)
  }

    //Function to put JWT token in local storage.
    const setToken = (data) => {
      localStorage.setItem("token", data);
      setAuthToken(data);
    }
  
    const authenticate = async (username, password) => {
      const result = await login(username, password);
      if (result.token) {
        setToken(result.token)
        setIsAuthenticated(true);
        setUserName(username);
        loadFavourites();
        localStorage.setItem("username", username);
        localStorage.setItem("authenticated", true)
      }
      console.log("code: ", result.code)
      return (result.code != 401) ? true : false;
    };
  
    const register = async (username, password) => {
      const result = await signup(username, password);

      console.log("code_r: ", result.code)
      return (result.code == 201) ? true : false;
    };
  
    const signout = () => {
      setTimeout(() => setIsAuthenticated(false), 100);
      setToken(null);
      localStorage.setItem("username", null);
      localStorage.setItem("authenticated", null)
    }

  return (
    <MoviesContext.Provider
      value={{
        favorites,
        setFavorites,
        addToFavorites,
        removeFromFavorites,
        loadFavourites,
        addReview,
        mustWatch,
        addMustWatch,
        user,
        setUser,
        isAuthenticated,
        authenticate,
        register,
        signout,
        userName,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;