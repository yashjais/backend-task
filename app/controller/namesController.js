const Name = require('../model/name')

module.exports.list = (req, res) => {
    Name.find()
        .then(name => {
            res.json(name)
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.show = (req, res) => {
    const id = req.body
    Name.findById(id)
        .then(name => {
            res.json(name)
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.create = (req, res) => {
    console.log(req)
    const body = req.body
    console.log(body)
    const name = new Name(body)
    name.save()
        .then (na => {
            if(na){
                res.json(na)
            }else{
                res.json({})
            }
        })
        .catch(err => {
            res.json(err)
        })
}


module.exports.splshow = (req, res) => {
    const body = req.body
    const fullbody = req.query.fullName
    // res.json(fullbody)
    const arr = fullbody.split(' ')
    const outPut = {
        "firstName": arr[0],
        "lastName" : arr[1]
    }
    res.json(outPut)
}

module.exports.age = (req, res) => {
    const value = req.query.dob
    const date = new Date()
    const currentYear = date.getFullYear()
    const year = Number(value.slice(0, 4))
    res.json({"age" : currentYear - year})
}