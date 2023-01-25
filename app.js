require('dotenv').config();
const express = require("express");
const app = express();
app.use(express.json())
const CONNECTION = require("./Database/Db");
CONNECTION();

app.get('/', (req, res) => {
    res.send('Hello World!'); 
});

app.get('/health', (req, res)=>{
    res.send({
        status: "server is healthy", 
        Time: new Date()
    })
})


const PORT = process.env.PORT;
const HOST = process.env.HOST;
app.listen(PORT, () => {
    console.log(`Example app listening at http://${HOST}:${PORT}`);
  });