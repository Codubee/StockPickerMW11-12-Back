const express = require('express')
const app = express()
const axios = require('axios')
app.use(express.json())

// creates a POST route to add people
// http://java-sample-api-2020.herokuapp.com/addPerson
app.post('/addPerson', (postmanRequest, postmanResponse) => 
{
    const body = postmanRequest.body

    // add person and display message
    axios.post('http://java-sample-api-2020.herokuapp.com/addPerson', body)
    .then((apiResponse) =>
    {
        console.log(apiResponse.data)
        postmanResponse.status(200).json({'message': 'person added'})
    })

    // catch error and display error message
    .catch((err)=>
    {
        postmanResponse.status(500).json({'message': 'there was an error'})
    })
})

// creates a GET route to get all people
// http://java-sample-api-2020.herokuapp.com/getAllPeople
app.get('/getAllPeople', (postmanRequest, postmanResponse) =>
{
    // get all people and display message
    axios.get('http://java-sample-api-2020.herokuapp.com/getAllPeople')
    .then((apiResponse) =>
    {
        console.log(apiResponse.data)
        postmanResponse.status(200).json({'message': 'all people displayed'})
    })

    // catch error and display error message
    .catch((err) =>
    {
        postmanResponse.status(500).json({'message': 'there was an error'})
    })
})

// creates a DELETE route to delete people
// http://java-sample-api-2020.herokuapp.com/deletePerson
app.delete('/deletePerson', (postmanRequest, postmanResponse) =>
{
    const idNum = postmanRequest.query['id']

    // delete person and display message
    axios.delete('http://java-sample-api-2020.herokuapp.com/deletePerson?id=' + idNum)
    .then((apiResponse) =>
    {
        console.log(apiResponse.data)
        postmanResponse.status(200).json({'message': 'person deleted'})
    })

    // catch error and display error message
    .catch((err) =>
    {
        postmanResponse.status(500).json({'message': 'there was an error'})
    })
})

// tells API to listen for incoming requests
app.listen(8080, () => console.log('Example app listening at http://localhost:8080'))