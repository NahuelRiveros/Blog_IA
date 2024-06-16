import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routerBlog from "./routes/routes.js"

const env = dotenv.config();
const app = express();

// Habilita CORS
app.use(cors());

// Habilita el uso de JSON en las solicitudes
app.use(express.json());

app.get("/", (req, res) => {
  res.send("¡Hola desde el backend!");
});

// Usa el enrutador de login
app.use('/api', routerBlog); 

const port = process.env.PORT;

app.listen(port, (req, res) => {
    console.log(`server esta corriendo en http://localhost:${port}/`);
});