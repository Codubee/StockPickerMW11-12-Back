const express = require('express')
const app = express()
const axios = require('axios');
require('dotenv').config();
app.use(express.json());

//route used to add people to the api
app.post('/addPerson',(pRequest,pResponse) =>
{
    const body = pRequest.body
    axios.post('http://java-sample-api-2020.herokuapp.com/addPerson',body)//adds the specific person to the database
    .then((herokuResponse) =>
    {
        pResponse.status(200).json(herokuResponse.data)
    })
    .catch((error) => //displays an error message if there is an issue
    {
        pResponse.status(500).json({'message': 'There was an error' })
    })
})
//route used to get a list of people in the database
app.get('/getAllPeople',(pRequest,pResponse) =>
{
    axios.get('http://java-sample-api-2020.herokuapp.com/getAllPeople')//gets all the people in the database
    .then((herokuResponse) =>
    {
        pResponse.status(200).json(herokuResponse.data)
    })
    .catch((error) => //displays an error message if there is an issue
        {
            pResponse.status(500).json({ 'message': 'There was an error' })
        })

})
//route used to delete people in the api
app.delete('/deletePerson',(pRequest,pResponse) =>
{
    let keyP = pRequest.query.id//finds the id of the person that was passed in as a parameter
    axios.delete('http://java-sample-api-2020.herokuapp.com/deletePerson?id=' + keyP)//deletes the specified person
    .then((herokuResponse) =>
    {
        pResponse.status(200).json(herokuResponse.data)
    })
    .catch((error) => //displays an error message if there is an issue
    {
        pResponse.status(500).json({ 'message': 'There was an error' })
    })

})
//route to search for events
app.get('/search',function(request,response)
{
    const config = {headers:{'Authorization':'Bearer '+ process.env.API_TOKEN}} // holds the token
    let url = 'https://api.yelp.com/v3/businesses/search?latitude=37.787789124691&longitude=-122.399305736113'
    axios.get(url,config)
    .then((herokuResponse) =>
    {
        response.json(herokuResponse.data)
    })
    .catch((error) => //displays an error message if there is an issue
    {
        response.json({ 'message': 'There was an error' })
    })
})
//route to get the details of an event
app.get('/getDetails', function (request,response)
{
    const config = {headers:{'Authorization':'Bearer '+ process.env.API_TOKEN}}//holds the token
    let spefEvent = 'https://api.yelp.com/v3/events/dallas-sweet-treats-with-frost-bank-2'//the id of the specific event
    axios.get(spefEvent,config)
    .then((herokuResponse) =>
    {
        response.json(herokuResponse.data)
    })
    .catch((error) => //displays an error message if there is an issue
    {
        response.json({ 'message': 'There was an error' })
    })
})
//route to get the a specific event based on the given location
app.get('/events', function (request,response)
{
    const config = {headers:{'Authorization':'Bearer '+ process.env.API_TOKEN}}//holds the token
    let location = request.query.location//finds the location that was passed as a paramter
    axios.get('https://api.yelp.com/v3/events?location='+ location,config)
    .then((herokuResponse) =>
    {
        response.json(herokuResponse.data)
    })
    .catch((error) => //displays an error message if there is an issue
    {
        response.json({ 'message': 'There was an error' })
    })
})
app.listen(8080, () => console.log('Example app listening at http://localhost/:8080'))