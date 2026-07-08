import Folder from "../models/folder.model.js";


interface CreateFolderInput {
    name: string;
    parentFolderId: string | null
}

export const createFolderService = async ({ name, parentFolderId }: CreateFolderInput) => {


    const existingFolder = await Folder.findOne({ name, parentFolderId })

    if (existingFolder) {
        throw new Error("Folder already exists")
    }

    const folder = await Folder.create({
        name,
        parentFolderId
    })

    return folder;

}