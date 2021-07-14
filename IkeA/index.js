// Import libraries
const express = require('express')
const app = express()
const axios = require('axios')
app.use(express.json())

// Create a GET route with a path of /getAllPeople
app.get('/getAllPeople', function (req, res)
{
    console.log(req.body)

    const body = req.body

    // Call URL - http://java-sample-api-2020.herokuapp.com/getAllPeople
    axios.get('http://java-sample-api-2020.herokuapp.com/getAllPeople', body)
        .then(function (apiResponse)
        {
            console.log(apiResponse.data)
            res.status(200).json(apiResponse.data)
        })
        // catch error
        .catch(function (error)
        {
            res.status(500).json({ 'message': 'There was an error' })
        })
})

// Create a POST route with a path of /addPerson
app.post('/addPerson', function (req, res)
{
    console.log(req.body)

    const body = req.body

    // Call URL - http://java-sample-api-2020.herokuapp.com/addPerson
    axios.post('http://java-sample-api-2020.herokuapp.com/addPerson', body)
        .then(function (apiResponse)
        {
            console.log(apiResponse.data)
            res.status(200).json({ 'message': 'Person added successfully' })
        })
        // catch error
        .catch(function (error)
        {
            res.status(500).json({ 'message': 'There was an error' })
        })
})

// Create a DELETE route with a path of /deletePerson
app.delete('/deletePerson/:UserId', function (req, res)
{
    console.log(req.body)

    const body = req.body

    // Call URL - http://java-sample-api-2020.herokuapp.com/deletePerson/:UserId
    axios.delete('http://java-sample-api-2020.herokuapp.com' + req.path, body)
        .then(function (apiResponse)
        {
            console.log(apiResponse.data)
            res.status(200).json({ 'message': 'Person deleted successfully!' })
        })
        // catch error
        .catch(function (error)
        {
            res.status(500).json({ 'message': 'There was an error' })
        })
})

// Tell our API to listen for incoming requests
app.listen(8080, () => console.log('Example app listening at http://localhost:8080'))