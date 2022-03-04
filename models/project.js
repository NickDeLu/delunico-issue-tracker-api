var db = require('../database')
require('dotenv').config();

module.exports = class Project {

    constructor(project_title) {
        this.project_title = project_title;
    }

    static getProject(id) {
        return db.query('SELECT * FROM project where id = $1', [id]);
    }

    static getProjects() {
        return db.query('SELECT * FROM project');
    }

    static updateProject(project) {
        return db.query('UPDATE project SET project_title = $1 WHERE id = $2', [project.title, project.id]);
    }

    static createProject(project) {
        return db.query('INSERT INTO project (project_title) values ($1)', [project.title]);
    }

    static deleteProject(id) {
        return db.query('DELETE FROM project WHERE id = $1', [id]);
    }
}