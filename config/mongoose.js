//import all required packages 
const mongoose = require('mongoose');

//sets up the mongodb cloud url
MongoURL = process.env.MONGO_URL;

//connect to app to mongodb
mongoose.connect("mongodb://dubeyshivam512:shivamshivam@ac-6xfhjfg-shard-00-00.bsjppuh.mongodb.net:27017,ac-6xfhjfg-shard-00-02.bsjppuh.mongodb.net:27017/?ssl=true&replicaSet=atlas-qc34uv-shard-0&authSource=admin&retryWrites=true&w=majority")
.then(()=>console.log('DB Connected Sucessfully'))
.catch((err)=>console.log(`Connetion Error in Mongodb ${err}`));
