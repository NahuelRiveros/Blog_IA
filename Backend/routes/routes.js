import express from 'express';
import Login from '../controllers/Login.js'
import authenticateToken from '../middleware/MiddlewareLogin.js';
import getUser from '../controllers/getUsers.js';
<<<<<<< HEAD
import {tbComentarios} from "../Modules/module.js";

=======
import voteUser from '../controllers/voteUser.js';
>>>>>>> 6301baff51063164d9d78ad0db05f1950bd7360c
const routerBlog = express.Router();

routerBlog.post('/login', Login)
routerBlog.get('/user',authenticateToken, getUser);
routerBlog.post('/posts/:postId/vote',authenticateToken,voteUser.createVote)
export default routerBlog;