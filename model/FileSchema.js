const mongoose = require('mongoose');

const fileSchema = {
    folderName:String,
    fileName: String, 
    fileData: String
}

const File = mongoose.model('File', fileSchema)
module.exports = File;