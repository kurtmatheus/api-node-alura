import express, { json } from "express";

const app = express();
app.use(express.json());

const livros = [
    {
        id:1,
        titulo: "PJ - O Ladrão de Raios"
    },
    {
        id:2,
        titulo:"PJ - O Mar de Monstros"
    }
]

function buscaIndexLivro(id) {
    return livros.findIndex( livro => {
        return livro.id === Number(id);
    });
}

app.get("/", (req, res) => {
    res.status(200).send("Hello World from Express!");
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});

app.get("/livros/:id", (req, res) => {
    const index = buscaIndexLivro(req.params.id);
    res.status(200).json(livros[index]);
});

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Cadastro de Livro efetuado com sucesso!");
});

app.put("/livros/:id", (req, res) => {
    const index = buscaIndexLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
});

app.delete("/livros/:id", (req, res) => {
    const index = buscaIndexLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro removido com sucesso.")
});

export default app;