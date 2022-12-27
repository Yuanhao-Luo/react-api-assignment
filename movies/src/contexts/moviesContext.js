import React, { useState } from "react";
import { login, signup } from "../api/tmdb-api";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )
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
    if (!favorites.includes(movie.id)){
      newFavorites = [...favorites, movie.id];
    }
    else{
      newFavorites = [...favorites];
    }
    setFavorites(newFavorites)
  };

  // We will use this function in a later section
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };

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
        localStorage.setItem("username", username);
        localStorage.setItem("authenticated", true)
      }
    };
  
    const register = async (username, password) => {
      const result = await signup(username, password);
      console.log(result.code);
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
        addToFavorites,
        removeFromFavorites,
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