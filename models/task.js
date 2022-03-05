var db = require('../database')
require('dotenv').config();

module.exports = class Task {

    constructor(status_id, task_assignee, task_description, task_duedate) {
        this.status_id = status_id;
        this.task_assignee = task_assignee;
        this.task_description = task_description;
        this.task_duedate = task_duedate;
    }

    static getTasks(statusId) {
        return db.query('SELECT * FROM task where status_id = $1', [statusId]);
    }

    static updateTask(task) {
        return db.query('UPDATE task SET status_id = $1, task_assignee = $2, task_description = $3, task_duedate = $4 WHERE id = $5 RETURNING *', [task.status_id, task.task_assignee, task.task_description, task.task_duedate, task.id]);
    }

    static createTask(task) {
        return db.query('INSERT INTO task (status_id, task_assignee, task_description, task_duedate) values ($1, $2, $3, $4) RETURNING *', [task.status_id, task.task_assignee, task.task_description, task.task_duedate]);
    }

    static deleteTask(id) {
        return db.query('DELETE FROM task WHERE id = $1', [id]);
    }
}