
const mongoose = require('mongoose')

const connection = () => {
    mongoose.connect(process.env.CONNECTION_URI)
        .then(() => {
            console.log('Database Connected')
        })
        .catch((er) => {
            console.log(er.message)
        })
}

module.exports = connection