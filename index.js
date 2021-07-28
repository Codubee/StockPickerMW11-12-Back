const express = require('express')
const app = express()
const axios = require('axios')
app.use(express.json())

// Route to get a stock from the database of stocks.
// Use GET route with a path of /
// Calls the URL: https://codubee-projects-api.herokuapp.com/stocks/getStockData
app.get('/getStockData', (req, res) => {
    axios.get('https://codubee-projects-api.herokuapp.com/stocks/getStockData')
    .then( apiResponse => {
        res.status(200).json(apiResponse.data);
    })
    .catch( function(err) {
        res.status(200).json({'message':'there was an error getting stock from db'});
    })
})


app.listen(8080, () => console.log('Example app listening at http://localhost:8080'))
