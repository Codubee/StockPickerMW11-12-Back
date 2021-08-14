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

// Create a GET route with a path of /searchYelp to connect to yelps search api
app.get('/searchYelp', (req, res) =>
{
    // Save the yelp token in a config variable
    const config = { headers: { 'Authorization': 'Bearer ' + process.env.API_TOKEN } }

    // Example url: https://api.yelp.com/v3/transactions/delivery/search?latitude=37.787789124691&longitude=-122.399305736113

    // Include the object that contains the token in the GET request
    axios.get('https://api.yelp.com/v3/businesses/search?latitude=37.787789124691&longitude=-122.399305736113', config)
        .then((yelpRes) =>
        {
            console.log(yelpRes.data)
            res.json(yelpRes.data)
        })
        .catch((err) =>
        {
            console.log(err)
            res.json({ "msg": "Error with request" })
        })
})

// GET https://api.yelp.com/v3/events/{id}
// Create a route to get the details of an event
app.get('/yelpEventDetail', (req, res) =>
{
    // Save the yelp token in a config variable
    const config = { headers: { 'Authorization': 'Bearer ' + process.env.API_TOKEN } }


    var url = 'https://api.yelp.com/v3/events/oakland-saucy-oakland-restaurant-pop-up'
    console.log(url)

    // Include the object that contains the token in the GET request
    axios.get(url, config)
        .then((yelpRes) =>
        {
            console.log(yelpRes.data)
            res.json(yelpRes.data)
        })
        .catch((err) =>
        {
            console.log(err)
            res.json({ err })
        })
})

// GET https://api.yelp.com/v3/events
// Create a route to connect to yelps event api
app.get('/yelpEventAPI', (req, res) =>
{
    // Save the yelp token in a config variable
    const config = { headers: { 'Authorization': 'Bearer ' + process.env.API_TOKEN } }

    var location = req.query.location
    // var url = 'https://api.yelp.com/v3/events?latitude=37.787789124691&longitude=-122.399305736113' + location
    var url = 'https://api.yelp.com/v3/events?location=' + location
    console.log(url)

    // Include the object that contains the token in the GET request
    axios.get(url, config)
        .then((yelpRes) =>
        {
            console.log(yelpRes.data)
            res.json(yelpRes.data)
        })
        .catch((err) =>
        {
            console.log(err)
            res.json({ "msg": "Error with request" })
        })
})

// Tells our API to listen for incoming requests
app.listen(8080, () => console.log('Example app listening at http://localhost:8080'))
