const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.listen(3000, () => console.log('Server corriendo en puerto 3000'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/home.html'));
});

app.get('/crea-tu-cuenta', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/crea-tu-cuenta.html'));
});

app.get('/ofertas', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/ofertas.html'));
});

app.get('/tiendas-virtuales', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/tiendas-virtuales.html'));
});

app.get('/vender', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/vender.html'));
});

app.get('/ayuda', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/ayuda.html'));
});

app.get('/ingresa', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/ingresa.html'));
});

app.get('/mis-compras', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/mis-compras.html'));
});

