import express from 'express';
import Login from '../controllers/Login.js'
import authenticateToken from '../middleware/MiddlewareLogin.js';
import getUser from '../controllers/getUsers.js';
import { registroInteligenciaArtificial,getIntArt } from '../controllers/ArtificialInteligence.js'
import { registroUsuario } from '../controllers/Register.js'
import { registroDebate } from '../controllers/Debate.js'
import { registroComentario } from '../controllers/Comment.js'
import { registroVotoInteligenciaArtificial } from '../controllers/VoteArtInt.js'
import {tbRol, tbTemas, tbTags, tbImagenIntArt, tbEjemploIntArt, tbUsuarios,tbComentarios,tbDebates,tbInteligenciaArtificial,tbTagsIntArt,tbUsuarioVotoInt,tbUsuarioVotoComentario} from "../Modules/module.js";
import {createVote} from '../controllers/voteUser.js';

const routerBlog = express.Router();

routerBlog.post('/login', Login)
routerBlog.get('/user',authenticateToken, getUser);
routerBlog.get('/obtainIntArt/:id',authenticateToken, getIntArt);

routerBlog.post('/register',registroUsuario)
routerBlog.post('/posts/:postId/vote',authenticateToken,createVote)
routerBlog.post('/newIA',authenticateToken,registroInteligenciaArtificial)
routerBlog.post('/debate',registroDebate)
routerBlog.post('/comment',registroComentario)
routerBlog.post('/voteIA',registroVotoInteligenciaArtificial)
export default routerBlog;