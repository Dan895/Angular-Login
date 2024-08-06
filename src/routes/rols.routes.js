import { Router } from 'express';
import { getRols, getRol, createRol, updateRol, deleteRol } from '../controllers/rols.controller.js';

// instancia de express router
const router = Router();

router.get('/rols', getRols);
router.get('/rol/:id', getRol);
router.post('/rol', createRol);
router.put('/rol/:id', updateRol);
router.delete('/rol/:id', deleteRol);

export default router;

