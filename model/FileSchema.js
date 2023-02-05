const mongoose = require('mongoose');

const fileSchema = {
    folderName:String,
    fileName: {
        type: String,
        text: true,
        index: true,
        unique: true
    }, 
    fileData: String
}

const File = mongoose.model('File', fileSchema)
module.exports = File;