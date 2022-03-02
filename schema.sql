CREATE TABLE Project(
	id SERIAL PRIMARY KEY,
	project_title VARCHAR(100) NOT NULL
);
CREATE TABLE Status(
	id SERIAL PRIMARY KEY,
	project_id INT NOT NULL,
	status_title VARCHAR(100) NOT NULL,
	status_order INT NOT NULL,
	CONSTRAINT fk_project FOREIGN KEY(project_id) REFERENCES Project(id)
);
CREATE TABLE Task(
	Id SERIAL PRIMARY KEY,
	status_id INT NOT NULL,
	task_assignee VARCHAR(100),
	task_description VARCHAR(800),
	task_duedate DATE,
	CONSTRAINT fk_status FOREIGN KEY(status_id) REFERENCES Status(id)
);