// Import libraries
const express = require('express')
const app = express()
const axios = require('axios')
app.use(express.json())

// Create a GET route with a path of /hello
app.get('/hello', function (req, res)
{
    //Send a message as a response to the request
    res.send('Hello world!')
})

// Tell our API to listen for incoming requests
app.listen(3000, () => console.log('Example app listening at http://localhost:3000'))