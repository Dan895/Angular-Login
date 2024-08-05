import { Router } from 'express';
import { getRols, createRol } from '../controllers/rols.controller.js';

// instancia de express router
const router = Router();

router.get('/rols', getRols);
router.post('/rol', createRol);
router.put('/rol/:id');
router.delete('/rol/:id');
router.get('/rol/:id');

export default router;

