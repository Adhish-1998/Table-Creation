const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const route = require('./Routes/route')
const cors = require('cors')
const app = express();

app.use(bodyParser.json())
app.use(cors());

app.use('/', route)

//mongoose.set('strictQuery', true)
mongoose.connect("mongodb+srv://Adhish-1998-DataBase:vQrIj9jTyDzRssqt@cluster0.af5tq.mongodb.net/Customer-Table-DB", {
    useNewUrlParser: true })
.then(() => console.log("mongoDB is connected"))
.catch((err) => console.log(err));



const port = process.env.PORT || 5000
app.listen(port, function () {
    console.log("app is running on the port" + port)
})