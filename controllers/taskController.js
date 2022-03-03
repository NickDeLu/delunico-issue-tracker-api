const Tasks = require('../models/task');

exports.getTasks = async (req, res) => {

    try {
        let response = await Tasks.getTasks(req.param('statusId'));
        res.status(200).json(response.rows)
    } catch (err) {
        res.status(500).json(err)
    }
};

exports.createTask = async (req, res) => {
    const task = req.body.task
    try {
        let response = await Tasks.createTask(task);
        res.status(200).json(response)
    } catch (err) {
        res.status(500).json(err)
    }
};

exports.deleteTask = async (req, res) => {
    try {
        let response = await Tasks.deleteTask(req.param('id'));
        res.status(200).json(response)
    } catch (err) {
        res.status(500).json(err)
    }
};

exports.updateTask = async (req, res) => {
    const task = req.body.task
    try {
        let response = await Tasks.updateTask(task);
        res.status(200).json(response)
    } catch (err) {
        res.status(500).json(err)
    }
};