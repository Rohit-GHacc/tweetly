import { Router } from "express";
import {createTweet, deleteTweet, getAllTweets, getFollowingTweets, likeOrDislikeTweet} from '../controllers/tweetController.js'
import isAuthenticated from '../config/auth.js'
const router = Router();
router.post('/create',isAuthenticated,createTweet)
router.delete('/delete/:id',isAuthenticated,deleteTweet)
router.put('/like/:id',isAuthenticated,likeOrDislikeTweet)
router.get('/alltweets/:id',isAuthenticated,getAllTweets)
router.get('/followingtweets/:id',isAuthenticated,getFollowingTweets)
export default router;