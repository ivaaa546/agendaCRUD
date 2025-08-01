import  Router  from 'express';

import { getContactos, getContactoById, createContacto, updateContacto, deleteContacto } from '../controllers/contactoController.js';
import asyncHandler from '../middlewares/asyncHandler.js';

const router = Router();

router.get('/', asyncHandler(getContactos));
router.get('/:id', asyncHandler(getContactoById));
router.post('/', asyncHandler(createContacto));
router.put('/:id', asyncHandler(updateContacto));
router.delete('/:id', asyncHandler(deleteContacto));

export default router;

