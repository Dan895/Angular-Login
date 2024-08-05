import { Router } from 'express';
import { getRols, createRol, updateRol, deleteRol } from '../controllers/rols.controller.js';

// instancia de express router
const router = Router();

router.get('/rols', getRols);
router.post('/rol', createRol);
router.put('/rol/:id', updateRol);
router.delete('/rol/:id', deleteRol);
router.get('/rol/:id');

export default router;

