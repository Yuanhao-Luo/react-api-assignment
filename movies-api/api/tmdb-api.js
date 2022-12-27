import fetch from 'node-fetch';

export const getUpcoming = (args) => {
    // const [, idPart] = args.queryKey;
    // const { page } = idPart;
    return fetch(
            `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=${args}`
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

export const getMovies = (args) => {
    // const [, idPart] = args.queryKey;
    // const { page } = idPart;
    return fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${args}`
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
    // const [, idPart] = args.queryKey;
    // const { id } = idPart;
    return fetch(
            `https://api.themoviedb.org/3/movie/${args}?api_key=${process.env.REACT_APP_TMDB_KEY}`
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
            "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
            process.env.REACT_APP_TMDB_KEY +
            "&language=en-US"
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

export const getMovieImages = (args) => {
    // const [, idPart] = queryKey;
    // const { id } = idPart;
    return fetch(
            `https://api.themoviedb.org/3/movie/${args}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
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
            `https://api.themoviedb.org/3/movie/${args}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
        )
        .then((res) => res.json())
        .then((json) => {
            // console.log(json.results);
            return json.results;
        });
};

export const getCompany = (args) => {
    // console.log(args)
    // const [, idPart] = args.queryKey;
    // const { id } = idPart;
    return fetch(
            `https://api.themoviedb.org/3/company/${args}?api_key=${process.env.REACT_APP_TMDB_KEY}`
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

export const getCompanyImages = (args) => {
    // const [, idPart] = queryKey;
    // const { id } = idPart;
    return fetch(
            `https://api.themoviedb.org/3/company/${args}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
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
    // const [, idPart] = args.queryKey;
    // const { id } = idPart;
    return fetch(
            `https://api.themoviedb.org/3/movie/${args}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}`
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
    // const [, idPart] = args.queryKey;
    // const { id } = idPart;
    return fetch(
            `https://api.themoviedb.org/3/movie/${args}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
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
    // const [, idPart] = args.queryKey;
    // const { page } = idPart;
    return fetch(
            `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=${args}`
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
    // const [, idPart] = args.queryKey;
    // const { page } = idPart;
    return fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=${args}`
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
    // const [, idPart] = args.queryKey;
    // const { page } = idPart;
    return fetch(
            `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=${args}`
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