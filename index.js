const express = require('express')
const app = express()
var bodyParser = require('body-parser')
require('dotenv').config();
const taskRoutes = require('./routes/taskRoutes');
const statusRoutes = require('./routes/statusRoutes');
const projectRoutes = require('./routes/projectRoutes');
var cors = require('cors')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/tasks', taskRoutes);
app.use('/projects', projectRoutes);
app.use('/status', statusRoutes);

app.get("/", (req, res) => res.send("hello, welcome to issue tracker api"))

app.listen(process.env.PORT || 5000, () => {
    console.log(`issue-tracker-api listening at http://localhost:${process.env.PORT || 5000}`)
})