import Folder from "../models/folder.model.js";


interface CreateFolderInput {
    name: string;
    parentFolderId: string | null
}

export const createFolderService = async ({ name, parentFolderId }: CreateFolderInput) => {

    const folder = await Folder.create({
        name,
        parentFolderId
    })

    return folder;

}