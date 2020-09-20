const express = require('express')
const setUpDB = require('./config/database')
const router = require('./config/routes')
const app = express()
app.use(express.json())

const port = 3010

setUpDB()


app.get('/', (req, res) => {
    res.send('welcome')
})

app.use('/', router)

app.listen(port, ()=>{
    console.log('listening to port', port)  
})