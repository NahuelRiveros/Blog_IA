import express from 'express';
import Login from '../controllers/Login.js'
import authenticateToken from '../middleware/MiddlewareLogin.js';
import getUser from '../controllers/getUsers.js';
import { registroInteligenciaArtificial,getIntArt } from '../controllers/ArtificialInteligence.js'
import { registroUsuario } from '../controllers/Register.js'
import { registroDebate, getDebate } from '../controllers/Debate.js'
import { registroComentario, getComentario } from '../controllers/Comment.js'
import { registroVotoInteligenciaArtificial } from '../controllers/VoteArtInt.js'
import {tbRol, tbTemas, tbTags, tbImagenIntArt, tbEjemploIntArt, tbUsuarios,tbComentarios,tbDebates,tbInteligenciaArtificial,tbTagsIntArt,tbUsuarioVotoInt,tbUsuarioVotoComentario} from "../Modules/module.js";
import {createVote} from '../controllers/voteUser.js';

const routerBlog = express.Router();

routerBlog.post('/login', Login)
routerBlog.get('/getUser/:id',authenticateToken, getUser);
routerBlog.get('/obtainIntArt/:id',authenticateToken, getIntArt);

routerBlog.post('/register',registroUsuario)
routerBlog.post('/posts/:postId/vote',authenticateToken,createVote)
routerBlog.post('/newIA',authenticateToken,registroInteligenciaArtificial)
routerBlog.post('/debate',registroDebate)
routerBlog.get('/debateGet/:id', getDebate)
routerBlog.post('/comment',registroComentario)
routerBlog.get('/commentGet/:id', getComentario)
routerBlog.post('/voteIA',registroVotoInteligenciaArtificial)
export default routerBlog;