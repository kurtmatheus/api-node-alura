import express, { json } from "express";
import conectaDb from "./config/dbconnect.js";
import routes from "./routes/index.js";

const conexao = await conectaDb();

conexao.on('error', e => {
    console.error("Erro de Conexao:", e)
});

conexao.once('open', () => {
    console.log("Conexão com Banco Feita com Sucesso!")
});

const app = express();

routes(app);

app.get("/", (req, res) => {
    res.status(200).send("Hello World from Express!");
});

export default app;