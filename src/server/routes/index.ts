import * as express from 'express';
import chirpsRouter from './chirps';

let router = express.Router();

router.use('/api/chirps', chirpsRouter);

// router.post('/api/chirps', async (req, res, next) => {
//     const chirpSubmission = req.body;
//     console.log(chirpSubmission)

// })
export default router;