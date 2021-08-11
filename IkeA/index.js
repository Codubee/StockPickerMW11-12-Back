// Import libraries
const express = require('express')
const app = express()
const axios = require('axios')
app.use(express.json())
require('dotenv').config();

// Create a POST route with a path of /addPerson
app.post('/addPerson', (req, res) =>
{
    const body = req.body

    // Call URL - http://java-sample-api-2020.herokuapp.com/addPerson
    axios.post('http://java-sample-api-2020.herokuapp.com/addPerson', body)
        .then((apiResponse) =>
        {
            console.log(apiResponse.data)
            res.status(200).json({ 'message': 'Person added successfully' })
        })
        // catch error
        .catch((error) =>
        {
            res.status(500).json({ 'message': 'There was an error' })
        })
})

// Create a GET route with a path of /getAllPeople
app.get('/getAllPeople', (req, res) =>
{
    // Call URL - http://java-sample-api-2020.herokuapp.com/getAllPeople
    axios.get('http://java-sample-api-2020.herokuapp.com/getAllPeople')
        .then((apiResponse) =>
        {
            console.log(apiResponse.data)
            res.status(200).json(apiResponse.data)
        })
        // catch error
        .catch((error) =>
        {
            res.status(500).json({ 'message': 'There was an error' })
        })
})

// Create a DELETE query route with a path of /deletePerson
app.delete('/deletePerson', (req, res) =>
{
    const idNumber = req.query['id']

    // New URL - https://java-sample-api-2020.herokuapp.com/deletePerson?id=1
    axios.delete('http://java-sample-api-2020.herokuapp.com/deletePerson?id=' + idNumber)
        .then((apiResponse) =>
        {
            console.log(apiResponse.data)
            res.status(200).json({ 'message': 'Person deleted successfully!' })
        })
        // catch error
        .catch((error) =>
        {
            res.status(500).json({ 'message': 'There was an error' })
        })
})

// Tells our API to listen for incoming requests
app.listen(8080, () => console.log('Example app listening at http://localhost:8080'))
