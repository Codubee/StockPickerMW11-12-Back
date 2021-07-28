const express = require('express')
const app = express()
const axios = require('axios')
app.use(express.json())
//method used to get matches from the database
app.get('/getMatches',(pRequest,pResponse) =>
{
    let keyP = pRequest.query.stockId//finds the id of the person that was passed in as a parameter
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
app.listen(8080,() => console.log('Example app listening at http://localhost:8080'))
