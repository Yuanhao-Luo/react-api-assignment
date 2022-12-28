import express from 'express';
import jwt from 'jsonwebtoken';
import Review from './reviewModel';
import movieModel from '../movies/movieModel';
import asyncHandler from 'express-async-handler';


const router = express.Router(); // eslint-disable-line

router.post('/', asyncHandler(async(req, res) => {
    await Review.create(req.body.review);
}));


export default router;