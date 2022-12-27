export const getMovies = (args) => {
    const [, idPart] = args.queryKey;
    const { page } = idPart;
    return fetch(
            `/api/movies/tmdb/discover?page=${page}`
        ).then((response) => {
            if (!response.ok) {
                throw new Error(response.json().message);
            }
            return response.json();
        })
        .catch((error) => {
            throw error
        });
};

export const getMovie = (args) => {
    // console.log(args)
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
            `/api/movies-auth/tmdb/movie/${id}`, {
                headers: {
                    'Authorization': window.localStorage.getItem('token')
                }
            }
        ).then((response) => {
            if (!response.ok) {
                throw new Error(response.json().message);
            }
            return response.json();
        })
        .catch((error) => {
            throw error
        });
};

export const getGenres = async() => {
    return fetch(
            "/api/movies/tmdb/genres"
        ).then((response) => {
            if (!response.ok) {
                throw new Error(response.json().message);
            }
            return response.json();
        })
        .catch((error) => {
            throw error
        });
};

export const getMovieImages = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
            `/api/movies-auth/tmdb/movie/${id}/images`, {
                headers: {
                    'Authorization': window.localStorage.getItem('token')
                }
            }
        ).then((response) => {
            if (!response.ok) {
                throw new Error(response.json().message);
            }
            return response.json();

        })
        .catch((error) => {
            throw error
        });
};

export const getMovieReviews = (id) => {
    return fetch(
            `/api/movies-auth/tmdb/movie/${id}/reviews`, {
                headers: {
                    'Authorization': window.localStorage.getItem('token')
                }
            }
        )
        .then((res) => res.json())
        .then((json) => {
            return json;
        });
};

// export const getUpcoming = () => {
//     return fetch(
//             `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
//         )
//         .then(res => res.json())
//         .then(json => json.results);
// }

export const getUpcoming = (args) => {
    const [, idPart] = args.queryKey;
    const { page } = idPart;
    return fetch(
            `/api/movies/tmdb/upcoming?page=${page}`, {
                headers: {
                    'Authorization': window.localStorage.getItem('token')
                }
            }
        ).then((response) => {
            if (!response.ok) {
                throw new Error(response.json().message);
            }
            return response.json();
        })
        .catch((error) => {
            throw error
        });
};

export const getCompany = (args) => {
    // console.log(args)
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
            `/api/movies-auth/tmdb/company/${id}`, {
                headers: {
                    'Authorization': window.localStorage.getItem('token')
                }
            }
        ).then((response) => {
            if (!response.ok) {
                throw new Error(response.json().message);
            }
            return response.json();
        })
        .catch((error) => {
            throw error
        });
};

export const getCompanyImages = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
            `/api/movies-auth/tmdb/company/${id}/images`, {
                headers: {
                    'Authorization': window.localStorage.getItem('token')
                }
            }
        ).then((response) => {
            if (!response.ok) {
                throw new Error(response.json().message);
            }
            return response.json();
        })
        .catch((error) => {
            throw error
        });
};


export const getCredits = (args) => {
    // console.log(args)
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
            `/api/movies-auth/tmdb/credits/${id}`, {
                headers: {
                    'Authorization': window.localStorage.getItem('token')
                }
            }
        ).then((response) => {
            if (!response.ok) {
                throw new Error(response.json().message);
            }
            return response.json();
        })
        .catch((error) => {
            throw error
        });
};

export const getSimilar = (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
            `/api/movies-auth/tmdb/similar/${id}`, {
                headers: {
                    'Authorization': window.localStorage.getItem('token')
                }
            }
        ).then((response) => {
            if (!response.ok) {
                throw new Error(response.json().message);
            }
            return response.json();
        })
        .catch((error) => {
            throw error
        });
};

export const getNowPlaying = (args) => {
    const [, idPart] = args.queryKey;
    const { page } = idPart;
    return fetch(
            `/api/movies/tmdb/now_playing?page=${page}`
        ).then((response) => {
            if (!response.ok) {
                throw new Error(response.json().message);
            }
            return response.json();
        })
        .catch((error) => {
            throw error
        });
};

export const getPopular = (args) => {
    const [, idPart] = args.queryKey;
    const { page } = idPart;
    return fetch(
            `/api/movies/tmdb/popular?page=${page}`
        ).then((response) => {
            if (!response.ok) {
                throw new Error(response.json().message);
            }
            return response.json();
        })
        .catch((error) => {
            throw error
        });
};

export const getTopRatedTV = (args) => {
    const [, idPart] = args.queryKey;
    const { page } = idPart;
    return fetch(
            `/api/movies/tmdb/top_rated?page=${page}`
        ).then((response) => {
            if (!response.ok) {
                throw new Error(response.json().message);
            }
            return response.json();
        })
        .catch((error) => {
            throw error
        });
};

export const login = (username, password) => {
    return fetch('/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const signup = (username, password) => {
    return fetch('/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const addFavourite = (username, id) => {
    return fetch(`/api/users/${username}/favourites`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ id: id })
    }).then((res) => res.json())
};

export const getFavourites = (username) => {
    // const [, idPart] = args.queryKey;
    // const { username } = idPart;
    return fetch(
            `/api/users/${username}/favourites`
        ).then((response) => {
            if (!response.ok) {
                throw new Error(response.json().message);
            }
            return response.json();
        })
        .catch((error) => {
            throw error
        });
};

export const deleteFavourite = (username, id) => {
    return fetch(`/api/users/${username}/favourites/delete`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ id: id })
    }).then((res) => res.json())
};