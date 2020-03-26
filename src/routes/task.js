import { Router } from 'express';
import { addTask, getTasks, update } from '../controller/task';
const router = Router();

router.post('/add-task', addTask);
router.post('/task', getTasks);
router.put('/update-task', update);

export default router;