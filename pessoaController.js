const express = require('express');
const { randomUUID } = require('crypto');
const router = express.Router();

// Array inicial de pessoas
let pessoas = [
    { id: randomUUID(), nome: "João", celular: "123456789" },
    { id: randomUUID(), nome: "Maria", celular: "987654321" }
];

// GET: Lista todas as pessoas
router.get('/', (req, res) => {
    return res.json(pessoas);
});

// POST: Adiciona uma nova pessoa
router.post('/', (req, res) => {
    const { nome, celular } = req.body;
    const novaPessoa = { id: randomUUID(), nome, celular };
    pessoas.push(novaPessoa);
    return res.status(201).json(novaPessoa);
});

// PUT: Atualiza uma pessoa por ID
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { nome, celular } = req.body;

    const index = pessoas.findIndex(p => p.id === id);
    if (index === -1) {
        return res.status(404).json({ mensagem: 'Pessoa não encontrada' });
    }

    pessoas[index] = { id, nome, celular };
    return res.json(pessoas[index]);
});

// DELETE: Remove uma pessoa por ID
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const index = pessoas.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({ mensagem: 'Pessoa não encontrada' });
    }

    pessoas.splice(index, 1);
    return res.status(204).send();
});

module.exports = router;
