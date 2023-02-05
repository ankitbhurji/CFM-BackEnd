const express = require("express");
const route = express.Router();

const Folder = require('../model/FolderSchema')
const File = require('../model/FileSchema')

route.get('/folder', async (req, res)=>{
    const folders = await Folder.find({}, {folderName:1})
    res.send(folders)
})
route.post('/folder', async (req, res)=>{
        
    const folder = new Folder({
        folderName:req.body.folderName,
    })
    if(req.body.folderName==undefined){
        console.log('not saved')
    }else{
            folder.save()
        // console.log(newFolder.length)
    }
    res.send('data saved')
})
route.post('/file', async (req, res)=>{
    const file = new File({
        folderName:req.body.folderName,
        fileName:req.body.fileName,
        fileData:req.body.fileData
    })
    file.save();
    // const test = await File.find()
    // console.log(test)
    // console.log(req.body.fileData)
    res.send('data has been updated.')
})
route.get('/find/:folder', async (req, res)=>{
    const fileData = await File.find({folderName:req.params.folder});
    res.send(fileData)
    // console.log(fileData)
})
route.get('/search/:searchKey', async (req, res)=>{
    var regex = new RegExp(req.params.searchKey, 'i')
    const searchFile = await File.find({fileName:regex})
    res.send(searchFile)
})
route.post('/update', async (req, res)=>{
    var folderName = req.body.folderName
    var fileName = req.body.fileName
    var updateFileData = req.body.fileData
    var updateFile = await File.updateMany({fileName:fileName}, {$set:{fileData:updateFileData}})
    res.send(updateFile)
})

module.exports = route;