import express from 'express';
import asyncHandler from 'express-async-handler';
import * as api from '../tmdb-api';

const router = express.Router();


router.get('/tmdb/movie/:id', asyncHandler(async(req, res) => {
    const id = req.params.id;

    const result = await api.getMovie(id);
    res.status(200).json(result);
}));

router.get('/tmdb/movie/:id/images', asyncHandler(async(req, res) => {
    const id = req.params.id;

    const result = await api.getMovieImages(id);
    res.status(200).json(result);
}));

router.get('/tmdb/movie/:id/reviews', asyncHandler(async(req, res) => {
    const id = req.params.id;

    const result = await api.getMovieReviews(id);
    res.status(200).json(result);
}));

router.get('/tmdb/company/:id', asyncHandler(async(req, res) => {
    const id = req.params.id;

    const result = await api.getCompany(id);
    res.status(200).json(result);
}));

router.get('/tmdb/company/:id/images', asyncHandler(async(req, res) => {
    const id = req.params.id;

    const result = await api.getCompanyImages(id);
    res.status(200).json(result);
}));

router.get('/tmdb/credits/:id', asyncHandler(async(req, res) => {
    const id = req.params.id;

    const result = await api.getCredits(id);
    res.status(200).json(result);
}));

router.get('/tmdb/similar/:id', asyncHandler(async(req, res) => {
    const id = req.params.id;

    const result = await api.getSimilar(id);
    res.status(200).json(result);
}));

export default router;