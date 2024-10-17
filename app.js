const http = require('http');
const fs = require('fs');
const path = require('path');

// Definindo o endereço IP e porta
const hostname = '0.0.0.0'; // Escuta em qualquer IP da máquina
const port = 3333; // Porta para o servidor

// Função que serve o arquivo HTML
const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, 'index.html');

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Erro no servidor');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content);
    }
  });
});

// Iniciando o servidor
server.listen(port, hostname, () => {
  console.log(`Servidor rodando em http://${hostname}:${port}/`);
});