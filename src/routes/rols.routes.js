import { Router } from 'express';
import { getRols, getRol, createRol, updateRol, deleteRol } from '../controllers/rols.controller.js';

// instancia de express router
const router = Router();

router.get('/rols', getRols);
router.get('/rols/:id', getRol);
router.post('/rols', createRol);
router.put('/rols/:id', updateRol);
router.delete('/rols/:id', deleteRol);

export default router;

