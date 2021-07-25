// Import and initialize express. Make sure to install express using NPM
const express = require('express')
const app = express()
app.use(express.json());
const axios = require('axios')  
app.use(express.json());

//get route
app.get('/getAllPeople', function(PostmanReq, PostmanRes) {
    
    //get request to the herokuapp
    axios.get('https://java-sample-api-2020.herokuapp.com/getAllPeople').then( function(herokuResponse) {
        
    PostmanRes.status(200).json(herokuResponse.data);})
    .catch(function(err){
        PostmanRes.status(500).json({"message":"error"})
        console.log(err)
    })
})

//Post route
app.post('/callAddPerson', function(PostmanReq, PostmanRes) {
    
    //post request to the heroku app
    axios.post('https://java-sample-api-2020.herokuapp.com/addPerson',PostmanReq.body).then( function(herokuResponse) {
        
    PostmanRes.status(200).json(herokuResponse.data); })
    .catch( err => {
        console.log(err)
    })
})

//Delete Route
app.delete('/callDeletePerson', function(PostmanReq, PostmanRes) {

    //delete request to heroku app
    axios.delete('https://java-sample-api-2020.herokuapp.com/deletePerson?id=' +PostmanReq.query.id).then( (herokuResponse) => {

    PostmanRes.status(200).json(herokuResponse.data); }) 
    .catch(function(error){
        
        console.log(error)
    })
})

/* 
    This method tells our API to listen for incoming requests.
    The first argument to app.listen is the port that we want the API to listen on.
    In this case we use port 8080. The second argument is a function that will
    display a message to the terminal saying that our API is now listening
*/
app.listen(8080, () => console.log(`Example app listening at http://localhost:8080`))