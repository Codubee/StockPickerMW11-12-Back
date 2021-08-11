const express = require('express')
const app = express()
const axios = require('axios')
app.use(express.json())

// Route to get a stock from the database of stocks.
// Use GET route with a path of /getStockData
// Calls the URL: https://codubee-projects-api.herokuapp.com/stocks/getStockData
app.get('/getStockData', (req, res) => {
    axios.get('https://codubee-projects-api.herokuapp.com/stocks/getStockData')
    .then( apiResponse => {
        res.status(200).json(apiResponse.data);
    })
    .catch( (err) => {
        res.status(500).json({'message':'there was an error getting stock from db'});
    })
})

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
//method used to get matches from the database
app.get('/getMatches',(pRequest,pResponse) =>
{
    let keyP = pRequest.query.userId//finds the id of the person that was passed in as a parameter
    axios.get('https://codubee-projects-api.herokuapp.com/stocks/getMatches?userId=' + keyP)//gets the person who matches the specified id
    .then((herokuResponse) =>
    {
        console.log(herokuResponse.data) 
        pResponse.status(200).json(herokuResponse.data)
    })
    .catch((error) => //displays an error message if there is an issue
        {
            pResponse.status(500).json({'message': 'User was not found'})
        })
})

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

//Delete Route
app.delete('/deleteStock', (PostmanReq, PostmanRes)=> {

    //delete request to heroku app
    axios.delete('https://codubee-projects-api.herokuapp.com/stocks/deleteStock?userId=' +PostmanReq.query.userId + '&stockId='+PostmanReq.query.stockId).then( (herokuResponse) => {

    PostmanRes.status(200).json(herokuResponse.data); }) 
    .catch((error) =>{
        
        console.log(error)
    })
})



app.listen( process.env.PORT || 8080, () => console.log('Example app listening at http://localhost:8080'))