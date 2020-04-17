import { Router } from 'express';
import { addTask, getTasks, update, deleteTask } from '../controller/task';
const router = Router();

router.post('/add-task', addTask);
router.post('/task', getTasks);
router.put('/edit-task', update);
router.delete('/delete-task/:id', deleteTask);

export default router;