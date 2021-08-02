const express = require('express')
const app = express()
const axios = require('axios')
app.use(express.json())

// Create a POST route with a path of /addStock to handle when a user selects yes to buy a stock
app.post('/addStock', (req, res) =>
{
    const body = req.body
    // Call URL - https://codubee-projects-api.herokuapp.com/stocks/addStock
    axios.post('https://codubee-projects-api.herokuapp.com/stocks/addStock', body)
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
app.listen(8080, () => console.log('Example app listening at http://localhost:8080'))
