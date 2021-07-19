const express = require('express')
const app = express()
const axios = require('axios')
app.use(express.json())

// creates a GET route to get all people
// url: http://java-sample-api-2020.herokuapp.com/getAllPeople
app.get('getAllPeople', function (postmanRequest, postmanResponse) {

    console.log(postmanRequest.body)

    // get all people and display message
    axios.get('http://java-sample-api-2020.herokuapp.com/getAllPeople', body)
    .then(function(apiResponse) {
        console.log(apiResponse.data)
        postmanResponse.status(200).json({'message': 'all people displayed'})
    })

    // catch error and display error message
    .catch(function(err) {
        postmanResponse.status(500).json({'message': 'there was an error'})
    })
})


// creates a POST route to add people
// url: http://java-sample-api-2020.herokuapp.com/addPerson
app.post('addPerson', function (postmanRequest, postmanResponse) {
    console.log(postmanRequest.body)

    const body = postmanRequest.body

    // add person and display message
    axios.post('http://java-sample-api-2020.herokuapp.com/addPerson', body)
    .then(function(apiResponse) {
        console.log(apiResponse.data)
        postmanResponse.status(200).json({'message': 'person added'})
    })

    // catch error and display error message
    .catch(function(err) {
        postmanResponse.status(500).json({'message': 'there was an error'})
    })
})


// creates a DELETE route to delete people
// url: http://java-sample-api-2020.herokuapp.com/deletePerson
app.delete('deletePerson', function (postmanRequest, postmanResponse) {
    console.log(postmanRequest.body)

    const body = postmanRequest.body

    axios.delete('http://java-sample-api-2020.herokuapp.com/addPerson', body)
    .then(function(apiResponse) {
        console.log(apiResponse.data)
        postmanResponse.status(200).json({'message': 'person added'})
    })
    .catch(function(err) {
        postmanResponse.status(500).json({'message': 'there was an error'})
    })
})

// tells API to listen for incoming requests
app.listen(8080, () => console.log('Example app listening at https//localhost:8080'))