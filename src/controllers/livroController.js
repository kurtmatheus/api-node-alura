import livro from "../models/Livro.js";

class LivroController {

    static async listarLivros(req, res) {
        try {
            const livros = await livro.find({});
            res.status(200).json(livros);
        } catch (erro) {
            repostaErro("Falha na requisicao...", res, req, erro)
        }
    }

    static async buscaLivroPorId(req, res) {
        try {
            const livro = await livro.findById(req.params.id);
            res.status(200).json(livro);
        } catch (erro) {
            repostaErro("Falha na requisicao...", res, req, erro)
        }
    }

    static async cadastrarLivro(req, res) {
        try {
            const novoLivro = await livro.create(req.body);
            res.status(201).json({
                message: "Livro Criado com Sucesso!",
                livro: novoLivro
            })
        } catch (erro) {
            repostaErro("Erro ao Cadastrar...", res, req, erro)
        }
    }

    static async atualizarLivro(req, res) {
        try {
            await livro.findByIdAndUpdate(req.params.id, req.body);
            const livroAtualizado = await livro.findById(req.params.id)
            res.status(200).json(livroAtualizado);
        } catch (erro) {
            repostaErro("Falha ao atualizar...", res, req, erro)
        }
    }

    static async deletarLivro(req, res) {
        try {
            await livro.findByIdAndDelete(req.params.id);
            res.status(200).json({mensagem: "Livro Deletado com Sucesso!"});
        } catch (erro) {
            repostaErro("Falha ao Deletar...", res, req, erro)
        }
    }
};

const repostaErro = (mensagem, res, req, erro) => {
    res.status(500).json({
        message: mensagem,
        erro: erro.message,
        path: req.path
    })
};

export default LivroController;