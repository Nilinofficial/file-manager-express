import {Router} from 'express';
import { createFolder } from '../controller/folder.controller.js';

const router = Router();

router.post("/create",createFolder)


export default router;