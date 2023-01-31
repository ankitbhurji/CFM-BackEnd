const mongoose = require('mongoose');

// const dataSchema = {
//     data:[String]
// }
// const fileSchema = {
//     fileName:String,
//     data:[dataSchema]
// }
// const folderSchema = {
//     folderName:String,
//     fileName:fileSchema
// }

const folderSchema = {
    folderName:String, 
    // fileName:[{fileName:String}],
    // data:[{fileData:String}]
}

const Folder = mongoose.model("Folder", folderSchema);
module.exports = Folder;
