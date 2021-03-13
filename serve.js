const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (_, res) => res.sendFile(path.join(__dirname, 'build', 'index.html')));

const port = Number(process.env.PORT) || 5500;
app.listen(
  port,
  () => console.info(`PDF-VIEW: serving static build with Express on port ${port}`),
);
