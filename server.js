const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve arquivos estáticos da pasta 'pages'
app.use(express.static(path.join(__dirname, 'pages')));



// Rota para a página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});

app.get('/api/database', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'db.json'));
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
