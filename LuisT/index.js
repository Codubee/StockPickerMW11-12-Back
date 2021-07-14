// Import and initialize express
// to allow testing server.
const express = require('express')
const app = express()
const axios = require('axios')
app.use(express.json())

// Creates a POST route with a path of /addPerson
// Calls the URL: http://java-sample-api-2020.herokuapp.com/addPerson
app.post('/addPerson', (postmanRequest, postmanResponse) => {
    //console.log(postmanRequest.body);

    const body = postmanRequest.body;

    axios.post('http://java-sample-api-2020.herokuapp.com/addPerson', body)
    .then( apiResponse => {
        //console.log(apiResponse.data);
        postmanResponse.status(200).json({'message':'person added'});       // Confirm success
    })
    .catch(function(err) {
        postmanResponse.status(200).json({'message':'there was an error'}); // Otherwise, notify of error.
    })
})

// Creates a GET route with a path of /getAllPeople
// Calls the URL: http://java-sample-api-2020.herokuapp.com/getAllPeople
app.get('/getAllPeople', (postmanRequest, postmanResponse) => {
    //console.log(postmanRequest.body);

    const body = postmanRequest.body;

    axios.get('http://java-sample-api-2020.herokuapp.com/getAllPeople', body)
    .then( apiResponse => {
        //console.log(apiResponse.data);
        postmanResponse.status(200).json(apiResponse.data);
    })
    .catch(function(err) {
        postmanResponse.status(200).json({'message':'there was an error'});
    })
})

// Creates a DELETE route with a path of /deletePerson/:UserId
// Calls the URL: http://java-sample-api-2020.herokuapp.com/deletePerson/:UserId
app.delete('/deletePerson/:UserId', (postmanRequest, postmanResponse) => {
    //console.log(postmanRequest.body);

    const body = postmanRequest.body;

    axios.delete('http://java-sample-api-2020.herokuapp.com' + postmanRequest.path, body)
    .then( apiResponse => {
        //console.log(apiResponse.data);
        postmanResponse.status(200).json({'message':'person deleted'});
    })
    .catch(function(err) {
        postmanResponse.status(200).json({'message':'there was an error'});
    })
})

/* 
    Listen for incoming requests.
    The first argument to app.listen is the port that we want the API to listen on.
    In this case we use port 8080. The second argument is a function that will
    display a message to the terminal saying that our API is now listening
*/
app.listen(8080, () => console.log(`Example app listening at http://localhost:8080`))