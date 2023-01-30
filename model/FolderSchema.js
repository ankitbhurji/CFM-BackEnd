const mongoose = require('mongoose');

const dataSchema = {
    data:[String]
}
const fileSchema = {
    fileName:String,
    data:[dataSchema]
}
const folderSchema = {
    folderName:String,
    fileName:[fileSchema]
}

const Folder = mongoose.model("Folder", folderSchema);
module.exports = Folder;
