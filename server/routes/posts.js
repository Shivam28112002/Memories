import express from 'express';
import{getposts, getpost, createpost, updatepost, likepost, deletepost } from '../controllers/post.js';

const router = express.Router();

router.get('/', getposts);
router.get('/', createpost);
router.get('/:id', getpost);
router.get('/:id', updatepost);
router.get('/:id', deletepost);
router.get('/:id/likepost', likepost);

export default router;