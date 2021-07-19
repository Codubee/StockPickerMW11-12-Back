// Import and initialize express
// to allow testing server.
const express = require('express')
const app = express()
const axios = require('axios')
app.use(express.json())

// Creates a POST route with a path of /addPerson
// Calls the URL: http://java-sample-api-2020.herokuapp.com/addPerson
app.post('/addPerson', (req, res) => {
    //console.log(req.body);

    const body = req.body;

    axios.post('http://java-sample-api-2020.herokuapp.com/addPerson', body)
    .then( apiResponse => {
        //console.log(apiResponse.data);
        res.status(200).json({'message':'person added'});       // Confirm success
    })
    .catch(function(err) {
        res.status(200).json({'message':'there was an error'}); // Otherwise, notify of error.
    })
})

// Creates a GET route with a path of /getAllPeople
// Calls the URL: http://java-sample-api-2020.herokuapp.com/getAllPeople
app.get('/getAllPeople', (req, res) => {
    //console.log(req.body);

    axios.get('http://java-sample-api-2020.herokuapp.com/getAllPeople')
    .then( apiResponse => {
        //console.log(apiResponse.data);
        res.status(200).json(apiResponse.data);
    })
    .catch(function(err) {
        res.status(200).json({'message':'there was an error'});
    })
})

// Creates a DELETE route with a path of /deletePerson/:UserId
// Calls the URL: http://java-sample-api-2020.herokuapp.com/deletePerson/:UserId
app.delete('/deletePerson', (req, res) => {
    // console.log(req.body);
    // console.log(req.params);
    // console.log(req.query);
    
    const idNum = req.query['id'];

    axios.delete('http://java-sample-api-2020.herokuapp.com/deletePerson?id=' + idNum)
    .then( apiResponse => {
        //console.log(apiResponse.data);
        res.status(200).json({'message':'person deleted'});
    })
    .catch(function(err) {
        res.status(200).json({'message':'there was an error'});
    })
})

// Listen for incoming requests.
// Test route paths.
app.listen(8080, () => console.log(`Example app listening at http://localhost:8080`))
