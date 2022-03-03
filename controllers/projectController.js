const Projects = require('../models/project');

exports.getProjects = async (req, res) => {

    try {
        let response = await Projects.getProjects();
        res.status(200).json(response.rows)
    } catch (err) {
        res.status(500).json(err)
    }
};

exports.createProject = async (req, res) => {
    const project = req.body.project
    try {
        let response = await Projects.createProject(project);
        res.status(200).json(response)
    } catch (err) {
        res.status(500).json(err)
    }
};

exports.deleteProject = async (req, res) => {
    try {
        let response = await Projects.deleteProject(req.param('id'));
        res.status(200).json(response)
    } catch (err) {
        res.status(500).json(err)
    }
};

exports.updateProject = async (req, res) => {
    const project = req.body.project
    try {
        let response = await Projects.updateProject(project);
        res.status(200).json(response)
    } catch (err) {
        res.status(500).json(err)
    }
};