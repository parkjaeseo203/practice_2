


const express = require('express')
const morgan = require('morgan')
const BP = require('body-parser')
const mongoose = require('mongoose')
const app = express()

const dbAdress = "mongodb+srv://bangnany:4275@cluster0.ntysu.mongodb.net/practice_2?retryWrites=true&w=majority"
const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true}

mongoose
    .connect(dbAdress, dbOptions)
    .then(() => console.log("Mongo DB connected"))
    .catch(err => console.log(err))



app.use(morgan('dev'))

app.use(BP.json())
app.use(BP.urlencoded({extended: false}))







const port = 1234


app.listen(port, console.log('server started'))