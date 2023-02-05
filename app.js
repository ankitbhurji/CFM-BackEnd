require('dotenv').config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json())
var cors = require('cors');
app.use(cors());
const CONNECTION = require("./Database/Db");
CONNECTION();

const SECURITY = require('./routes/Security')
const DETAILS = require('./routes/Details')

app.use('/api/security', SECURITY)
app.use('/api/details', DETAILS)


app.get('/health', (req, res)=>{
    res.send({
        status: "server is healthy", 
        Time: new Date()
    })
})

app.use((req, res, next)=>{
    res.status(404).send("enter valid url")
});

app.use((err, req, res, next)=>{
    res.status(500).send("something went wrong")
});

const PORT = process.env.PORT;
const HOST = process.env.HOST;
app.listen(PORT, () => {
    console.log(`Example app listening at http://${HOST}:${PORT}`);
  });