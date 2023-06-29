const express = require('express')
const app = express()

const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('hello world');
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});