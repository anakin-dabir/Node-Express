import express from 'express';
import { createPost, updatePost } from '../controllers/post';

export const postRoute = express.Router();
postRoute.post('/create', createPost);
postRoute.put('/update/:postId', updatePost);

