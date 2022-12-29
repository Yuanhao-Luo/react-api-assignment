import {React, useContext} from "react";
import { getRecommand } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQueries } from 'react-query';
import { useLocation } from 'react-router-dom';
import { MoviesContext } from "../contexts/moviesContext";
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'

const RecommandPage = (props) => {
  const context = useContext(MoviesContext);

  function useQ() {
    return new URLSearchParams(useLocation().search);
  }
  const query = useQ()
  let page = query.get('page') 
  page = page == null ? 1 : page

  const recommandLists = useQueries(
    context.favorites.map((movieId) => {
      return {
        queryKey: ["recommand", { id: movieId }],
        queryFn: getRecommand,
      };
    })
  );

  const isLoading = recommandLists.find((m) => m.isLoading === true);

  
  if (isLoading) {
    return <Spinner />
  }

  let movies = []

  for(let i = 0; i <= 20; i++){
      // eslint-disable-next-line no-loop-func
      recommandLists.forEach((list) => {
        const alist = list.data.results
        if(alist.length > 20){
        movies.push(alist[i])
        }
      }
    )
  }

  const totalPage = parseInt(movies.length / 20)

  var array = [];
  for (var i = 0; i < movies.length; i++) {
      if (!array.map(res => res.id).includes(movies[i].id)) {
          array.push(movies[i])
      }
  }
  movies = array

  movies = movies.filter((movie) => {
    return !context.favorites.includes(movie.id)
  })
  

  movies = movies.slice((page-1)*20, page*20)





  // Redundant, but necessary to avoid app crashing.
//   const favorites = movies.filter(m => m.favorite)
//   localStorage.setItem('favorites', JSON.stringify(favorites))
  // const addToFavorites = (movieId) => true 

  return (
    <PageTemplate
      title="Popular Movies"
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
      page={page}
      totalPage = {totalPage}
    />
  );
};
export default RecommandPage;