const mongoose = require("mongoose")
require("dotenv").config()

const dbConnect = () => {
    mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => console.log('DB Connection established'))
    .catch((error) => {
        console.log(error)
        process.exit(1)
    })
}


module.exports = dbConnect; 