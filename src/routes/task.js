const { Router } = require('express');
const { addTask, getTasks, update, deleteTask } = require('../controller/task');
const router = Router();

router.post('/add-task', addTask);
router.post('/task', getTasks);
router.put('/edit-task', update);
router.delete('/delete-task/:id', deleteTask);

module.exports = router;