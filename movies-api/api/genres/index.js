import express from 'express';
import uniqid from 'uniqid'
// import { genres } from './genresData';
import Genres from './genresModel'

const router = express.Router();

router.get('/', async(req, res) => {
    const genres = await Genres.find();
    res.status(200).json(genres);
});

// Get movie details
// router.get('/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     if (movieDetails.id == id) {
//         res.status(200).json(movieDetails);
//     } else {
//         res.status(404).json({
//             message: 'The resource you requested could not be found.',
//             status_code: 404
//         });
//     }
// });



export default router;