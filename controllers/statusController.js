const Status = require('../models/status');

exports.getStatus = async (req, res) => {

    try {
        let response = await Status.getStatus(req.param('projectId'));
        res.status(200).json(response.rows)
    } catch (err) {
        res.status(500).json(err)
    }
};

exports.createStatus = async (req, res) => {
    const status = req.body.status
    try {
        let response = await Status.createStatus(status);
        res.status(200).json(response.rows[0])
    } catch (err) {
        res.status(500).json(err)
    }
};

exports.deleteStatus = async (req, res) => {
    try {
        let response = await Status.deleteStatus(req.param('id'));
        res.status(200).json(response)
    } catch (err) {
        res.status(500).json(err)
    }
};

exports.updateStatus = async (req, res) => {
    const status = req.body.status
    try {
        let response = await Status.updateStatus(status);
        res.status(200).json(response.rows[0])
    } catch (err) {
        res.status(500).json(err)
    }
};