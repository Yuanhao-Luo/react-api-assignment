import express from 'express';
import uniqid from 'uniqid'
import movieModel from './movieModel';
import asyncHandler from 'express-async-handler';
import { movies, movieReviews, movieDetails } from './moviesData';
import * as api from '../tmdb-api';

const router = express.Router();

router.get('/', asyncHandler(async(req, res) => {
    const movies = await movieModel.find();
    res.status(200).json(movies);
}));

// Get movie details
router.get('/:id', asyncHandler(async(req, res) => {
    const id = parseInt(req.params.id);
    const movie = await movieModel.findByMovieDBId(id);
    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(404).json({ message: 'The resource you requested could not be found.', status_code: 404 });
    }
}));

// Get movie reviews
router.get('/:id/reviews', (req, res) => {
    const id = parseInt(req.params.id);
    // find reviews in list
    if (movieReviews.id == id) {
        res.status(200).json(movieReviews);
    } else {
        res.status(404).json({
            message: 'The resource you requested could not be found.',
            status_code: 404
        });
    }
});

//Post a movie review
router.post('/:id/reviews', (req, res) => {
    const id = parseInt(req.params.id);

    if (movieReviews.id == id) {
        req.body.created_at = new Date();
        req.body.updated_at = new Date();
        req.body.id = uniqid();
        movieReviews.results.push(req.body); //push the new review onto the list
        res.status(201).json(req.body);
    } else {
        res.status(404).json({
            message: 'The resource you requested could not be found.',
            status_code: 404
        });
    }
});

router.get('/tmdb/upcoming', asyncHandler(async(req, res) => {
    const page = req.query.page;

    const result = await api.getUpcoming(page);
    res.status(200).json(result);
}));


router.get('/tmdb/discover', asyncHandler(async(req, res) => {
    const page = req.query.page;

    const result = await api.getMovies(page);
    res.status(200).json(result);
}));


router.get('/tmdb/genres', asyncHandler(async(req, res) => {
    const result = await api.getGenres();
    res.status(200).json(result);
}));


router.get('/tmdb/now_playing', asyncHandler(async(req, res) => {
    const page = req.query.page;

    const result = await api.getNowPlaying(page);
    res.status(200).json(result);
}));


router.get('/tmdb/popular', asyncHandler(async(req, res) => {
    const page = req.query.page;

    const result = await api.getPopular(page);
    res.status(200).json(result);
}));


router.get('/tmdb/top_rated', asyncHandler(async(req, res) => {
    const page = req.query.page;

    const result = await api.getTopRatedTV(page);
    res.status(200).json(result);
}));

export default router;