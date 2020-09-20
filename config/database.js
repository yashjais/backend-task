const mongoose = require('mongoose')

const setUpDB = () => mongoose.connect('mongodb://localhost:27017/oct-tasks-jan-13',{ useUnifiedTopology: true, useNewUrlParser: true })
    .then(res => {
        console.log('connected to db')
    })
    .catch(err => {
        console.log(err)
    })


module.exports = setUpDB