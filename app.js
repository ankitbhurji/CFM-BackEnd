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

const Password = require('./model/Password');
const Folder = require('./model/FolderSchema');
const File = require('./model/FolderSchema')
const Data = require('./model/FolderSchema')

app.get('/api/folder', async (req, res)=>{
    const folders = await Folder.find({}, {folderName:1})
    res.send(folders)
})

app.post('/api/folder', (req, res)=>{
    const folder = new Folder({
        folderName:req.body.folderName,
        fileName:[{
            fileName:'myfile',
            data:[{
                data:'mydata'
            }]
        }]
    })
    folder.save(); 
    res.send('data saved')
    // console.log(req.body.folderName)
})

app.post('/password', async (req, res)=>{
    const getPassword = await Password.find()
    var setPassword;
    if(getPassword.length==1){
        setPassword = await Password.updateOne({},{password:req.body.pin})
    }else{
        const password = new Password({
            password: req.body.pin
        })
        password.save()
    }
    res.send(setPassword);
    // console.log(req.body.confirmPin, req.body.pin)
});

app.get('/getpassword', async (req, res)=>{
    const getPassword = await Password.find()
    res.send(getPassword)
})



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