import { Router } from "express";
import { bookmarks, follow, getMyProfile, getOtherUsers, Login, Logout, Register, unfollow } from "../controllers/userController.js";
import isAuthenticated from "../config/auth.js";


const router = Router();

router.post('/register',Register);
router.post('/login',Login);
router.get('/logout',Logout)
router.put('/bookmark/:id',isAuthenticated,bookmarks)
router.get('/profile/:id',isAuthenticated,getMyProfile)
router.get('/otherusers/:id',isAuthenticated,getOtherUsers)
router.put('/follow/:id',isAuthenticated,follow)
router.put('/unfollow/:id',isAuthenticated,unfollow)
export default router;