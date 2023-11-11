const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());


require('dotenv').config();
const PORT = process.env.PORT || 4000;
app.use(express.json()); 

app.listen(PORT , () => {
    console.log('App is listen on PORT :',PORT)
})

app.get('/' , (req , res) => {
    res.send("<h1>Hello Ubais</h1>")
})

const dbConnect = require("./config/database")
dbConnect();

const router = require('./routes/app.routes')
app.use('/', router)