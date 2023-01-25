require('dotenv').config();
const express = require("express");
const app = express();
app.use(express.json())



app.get('/', (req, res) => {
    res.send('Hello World!'); 
});


const PORT = process.env.PORT;
const HOST = process.env.HOST;
app.listen(PORT, () => {
    console.log(`Example app listening at http://${HOST}:${PORT}`);
  });