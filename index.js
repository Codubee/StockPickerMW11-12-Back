const express = require('express')
const app = express()
const axios = require('axios')
app.use(express.json())


app.listen(8080, () => console.log('Example app listening at http://localhost:8080'))
