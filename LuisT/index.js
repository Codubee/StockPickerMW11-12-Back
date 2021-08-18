// Import and initialize express
// to allow testing server.
const express = require('express')
const app = express()
const axios = require('axios')
app.use(express.json())
require('dotenv').config();

// Creates a POST route with a path of /addPerson
// Calls the URL: http://java-sample-api-2020.herokuapp.com/addPerson
app.post('/addPerson', (req, res) => {

    const body = req.body;

    axios.post('http://java-sample-api-2020.herokuapp.com/addPerson', body)
    .then( apiResponse => {
        res.status(200).json({'message':'person added'});       // Confirm success
    })
    .catch(function(err) {
        res.status(200).json({'message':'there was an error'}); // Otherwise, notify of error.
    })
})

// Creates a GET route with a path of /getAllPeople
// Calls the URL: http://java-sample-api-2020.herokuapp.com/getAllPeople
app.get('/getAllPeople', (req, res) => {

    axios.get('http://java-sample-api-2020.herokuapp.com/getAllPeople')
    .then( apiResponse => {
        res.status(200).json(apiResponse.data);
    })
    .catch(function(err) {
        res.status(200).json({'message':'there was an error'});
    })
})

// Creates a DELETE route with a path of /deletePerson/:UserId
// Calls the URL: http://java-sample-api-2020.herokuapp.com/deletePerson/:UserId
app.delete('/deletePerson', (req, res) => {
    
    const idNum = req.query['id'];

    axios.delete('http://java-sample-api-2020.herokuapp.com/deletePerson?id=' + idNum)
    .then( apiResponse => {
        res.status(200).json({'message':'person deleted'});
    })
    .catch(function(err) {
        res.status(200).json({'message':'there was an error'});
    })
})

// GET https://api.yelp.com/v3/businesses/search
// Create a GET route with a path of /searchYelp to connect to yelps search api.
app.get('/searchYelp', (req, res) =>
{
    // Yelp token.
    const config = { headers: { 'Authorization': 'Bearer ' + process.env.API_TOKEN } }
    var url = 'https://api.yelp.com/v3/businesses/search?term=Muji&location=NYC'

    // Include config.
    axios.get(url, config)
        .then((yelpRes) =>
        {
            res.json(yelpRes.data)
        })
        .catch((err) =>
        {
            res.json({ "Msg": "Error with request" })
        })
})


// GET https://api.yelp.com/v3/events/{id}
// Create a route with a path of /yelpEvent to get the details of a yelp event.
app.get('/yelpEvent', (req, res) =>
{
    // Yelp token.
    const config = { headers: { 'Authorization': 'Bearer ' + process.env.API_TOKEN } }
    var url = 'https://api.yelp.com/v3/events/oakland-yelps-community-cleanup-day'

    // Include config.
    axios.get(url, config)
        .then((yelpRes) =>
        {
            res.json(yelpRes.data)
        })
        .catch((err) =>
        {
            res.json({ "Msg": "Error with request" })
        })
})


// GET https://api.yelp.com/v3/events
// Create a route with a path of /yelpEventAPI to connect to yelps event api.
app.get('/yelpEventAPI', (req, res) =>
{
    // Yelp token.
    const config = { headers: { 'Authorization': 'Bearer ' + process.env.API_TOKEN } }

    var location = req.query.location
    var url = 'https://api.yelp.com/v3/events?location=' + location

    // Include config.
    axios.get(url, config)
        .then((yelpRes) =>
        {
            res.json(yelpRes.data)
        })
        .catch((err) =>
        {
            res.json({ "Msg": "Error with request" })
        })
})


// Listen for incoming requests.
// Test route paths.
app.listen(8080, () => console.log(`Example app listening at http://localhost:8080`))
