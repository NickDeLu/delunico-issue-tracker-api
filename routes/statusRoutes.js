const express = require('express');

const statusController = require('../controllers/statusController');

const router = express.Router();

router.get('/:projectId', statusController.getStatus);

router.post('/', statusController.createStatus);

router.put('/', statusController.updateStatus);

router.delete('/:id', statusController.deleteStatus);

module.exports = router;