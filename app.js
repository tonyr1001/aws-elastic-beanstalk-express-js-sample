const express = require('express');
const app = express();
const port = 8080;

<<<<<<< Updated upstream

app.get('/', (req, res) => res.send('Hello World From Tony!'));



app.listen(port);
console.log(`App running on http://localhost:${port}`);
