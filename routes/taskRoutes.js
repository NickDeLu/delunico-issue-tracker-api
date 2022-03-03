const express = require('express');

const taskController = require('../controllers/taskController');

const router = express.Router();

router.get('/:statusId', taskController.getTasks);

router.post('/', taskController.createTask);

router.put('/', taskController.updateTask);

router.delete('/:id', taskController.deleteTask);

module.exports = router;