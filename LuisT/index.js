// Import and initialize express
// to allow testing server.
const express = require('express')
const app = express()
const axios = require('axios')
app.use(express.json())

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

// Listen for incoming requests.
// Test route paths.
app.listen(8080, () => console.log(`Example app listening at http://localhost:8080`))
