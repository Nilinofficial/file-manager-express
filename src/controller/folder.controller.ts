import { Request, Response, NextFunction } from 'express';
import { createFolderService } from '../services/folder.service.js';

export const createFolder = async (
    req: Request,
    res: Response,
    next: NextFunction) => {
    try {
        const { name, parentFolderId } = req.body;
        const folder = await createFolderService({ name, parentFolderId });
        res.status(201).json(folder);
    } catch (err) {
        console.log(err);

    }
}