import express from 'express';
import asyncHandler from 'express-async-handler';
import * as api from '../tmdb-api';

const router = express.Router();


router.get('/tmdb/movie/:id', asyncHandler(async(req, res) => {
    const id = req.params.id;

    const result = await api.getMovie(id);
    res.status(200).json(result);
}));

export default router;