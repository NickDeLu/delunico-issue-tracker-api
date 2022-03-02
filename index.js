const express = require('express')
const app = express()
const path = require('path')
var db = require('./database')
var bodyParser = require('body-parser')
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/api/getProjects', async (req, res) => {

    try {
        let proj = (await db.query('SELECT * FROM Projects'))
        console.log(proj)
        res.status(200).json(proj)
    } catch (err) {
        res.status(500).json(err)
    }
})

app.post('/api/createProject', async (req, res) => {
    const project = req.body.project
    try {
        let newProj = (await db.query('INSERT INTO Project (title) values ($1)', [project.title]))
        res.status(200).json(newProj)
    } catch (err) {
        res.status(500).json(err)
    }
})


app.listen(process.env.PORT || 5000, () => {
    console.log(`issue-tracker-api listening at http://localhost:${process.env.PORT || 5000}`)
})