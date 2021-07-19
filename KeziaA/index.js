const express = require('express')
const app = express()
const axios = require('axios');
app.use(express.json());

//route used to add people to the api
app.post('/addPerson',function(pRequest,pResponse) 
{
    const body = pRequest.body
    axios.post('http://java-sample-api-2020.herokuapp.com/addPerson',body)//adds the specific person to the database
    .then(function(herokuResponse)
    {
        console.log(herokuResponse.data)
        pResponse.status(200).json(herokuResponse.data)
    })
    .catch((error) => //displays an error message if there is an issue
    {
        pResponse.status(500).json({'message': 'There was an error' })
    })


})
//route used to get a list of people in the database
app.get('/getAllPeople',function(pRequest,pResponse)
{
    const body = pRequest.body
    axios.get('http://java-sample-api-2020.herokuapp.com/getAllPeople',body)//gets all the people in the database
    .then(function(herokuResponse)
    {
        console.log(herokuResponse.data)
        pResponse.status(200).json(herokuResponse.data)
    })
    .catch((error) => //displays an error message if there is an issue
        {
            pResponse.status(500).json({ 'message': 'There was an error' })
        })

})
//route used to delete people in the api
app.delete('/deletePerson',function(pRequest,pResponse)
{
    let keyP = pRequest.query.id//finds the id of the person that was passed in as a parameter
    const body = pRequest.body
    axios.delete('http://java-sample-api-2020.herokuapp.com/deletePerson?id=' + keyP)//deletes the specified person
    .then(function(herokuResponse)
    {
         console.log(herokuResponse.data)
        pResponse.status(200).json(herokuResponse.data)
    })
    .catch((error) => //displays an error message if there is an issue
    {
        pResponse.status(500).json({ 'message': 'There was an error' })
    })

})

app.listen(8080, () => console.log('Example app listening at http://localhost/:8080'))