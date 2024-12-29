const express = require('express')
const mongoose = require('mongoose')
const User = require('./models/ramdom')

const app = express()
const port = 3000

mongoose.connect("mongodb://127.0.0.1:27017/Random_data")

app.use(express.static('public'))

app.get('/api/random-data', async(req, res) => {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
  
    const e = await User.create({
        name: data.results[0].name.first + " " + data.results[0].name.last, 
        gender:data.results[0].gender,
        email:data.results[0].email,
        locatioFeild:data.results[0].location.country + ", " +data.results[0].location.city,
        phone:data.results[0].phone,
        ID:data.results[0].id.name,
        Password:data.results[0].login.password
    })
    res.json(e)

})

  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})