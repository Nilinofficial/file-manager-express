import mongoose, { Schema } from "mongoose";

const folderSchema = new Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    parentFolderId: {
        type:Schema.Types.ObjectId,
        ref:"Folder",
        default:null
    }
},{
    timestamps:true
});

const Folder = mongoose.model("Folder",folderSchema);

export default Folder;
