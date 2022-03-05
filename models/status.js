var db = require('../database')
require('dotenv').config();

module.exports = class Status {

    constructor(project_id, status_title, status_order) {
        this.project_id = project_id;
        this.status_title = status_title;
        this.status_order = status_order;
    }

    static getStatus(projectId) {
        return db.query('SELECT * FROM status WHERE project_id = $1', [projectId]);
    }

    static updateStatus(status) {
        return db.query('UPDATE status SET  project_id = $1, status_title = $2, status_order = $3 WHERE id = $4 RETURNING *', [status.project_id, status.status_title, status.status_order, status.id]);
    }

    static createStatus(status) {
        return db.query('INSERT INTO status (project_id, status_title, status_order) values ($1, $2, $3) RETURNING *', [status.project_id, status.status_title, status.status_order]);
    }

    static deleteStatus(id) {
        return db.query('DELETE FROM status WHERE id = $1', [id]);
    }
}