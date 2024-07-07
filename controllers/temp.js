const express = require('express')
const mongoose = require('mongoose')
const route = require('Router')

const app = express()

const port = 5001;

app.listen(port,() => {
    console.log(`App listening on port ${port}`)
})

const MONGO_URI = "mongodb://dubeyshivam512:shivamshivam@ac-6xfhjfg-shard-00-00.bsjppuh.mongodb.net:27017,ac-6xfhjfg-shard-00-02.bsjppuh.mongodb.net:27017/?ssl=true&replicaSet=atlas-qc34uv-shard-0&authSource=admin&retryWrites=true&w=majority"

const connectDB = () => {
    mongoose.connect(MONGO_URI).then(() => {
        console.log("DB connected")
    }).catch((error) => {
        console.log(error)
    })
}



connectDB()

