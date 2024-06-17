import express from 'express';
import Login from '../controllers/Login.js'
import authenticateToken from '../middleware/MiddlewareLogin.js';
import getUser from '../controllers/getUsers.js';
import {tbComentarios} from "../Modules/module.js";
import {createVote} from '../controllers/voteUser.js';

const routerBlog = express.Router();

routerBlog.post('/login', Login)
routerBlog.get('/user',authenticateToken, getUser);
routerBlog.post('/posts/:postId/vote',authenticateToken,createVote)
export default routerBlog;