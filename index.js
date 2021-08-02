const express = require('express')
const app = express()
const axios = require('axios')
app.use(express.json())

// creates a GET route to get the weather
// https://codubee-projects-api.herokuapp.com/getWeather
app.get('/getWeather', (postmanRequest, postmanResponse) =>
{
    // get the weather
    axios.get('https://codubee-projects-api.herokuapp.com/getWeather')
    .then((apiResponse) =>
    {
        console.log(apiResponse.data)
        postmanResponse.status(200).json(apiResponse.data)
    })

    // catch error and display error message
    .catch((err) =>
    {
        postmanResponse.status(500).json({'message': 'there was an error'})
    })
})

app.listen(8080, () => console.log('Example app listening at http://localhost:8080'))
