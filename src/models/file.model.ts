import mongoose, { Schema } from "mongoose";

const fileSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    extension: {
        type: String,
        required: true,
        lowercase: true
    },
    mimeTye: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: true
    },
    path: {
        type: String,
        required: true
    },
    folderId: {
        type: Schema.Types.ObjectId,
        ref: "Folder",
        required: true
    }
}, {
    timestamps: true
})

const File = mongoose.model("File", fileSchema);

export default File