// Import and initialize express. 
const express = require('express')
const app = express()
const axios = require('axios')
app.use(express.json())

// Create Post Route using Axios
app.post('addPerson', function (req, res)
{
    console.log(req.body)

    // Saving incoming request into a const 
    const body = req.body

    // Input to axios.post
    axios.post('http://localhost:8080/addPerson', body).then(function (apiResponse)
    {
        console.log(apiResponse.data)
        res.status(200).json({ 'message': 'person added' })
    })
        //catch error
        .catch(function (error)
        {
            res.status(500).json({ 'message': 'there was an error' })
        })
})

// Tells our API to listen for incoming requests
app.listen(8080, () => console.log('App listening at http://localhost:8080'))