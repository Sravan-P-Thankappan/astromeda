require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const dbConnection = require('./configuration/db')
const userRoute = require('./routes/userRoute')
const adminRoute = require('./routes/adminRoute')
const port = process.env.PORT||4000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// ----------database connection-------------

dbConnection()

app.use('/api/user',userRoute)
app.use('/api/admin',adminRoute)

app.listen(port,()=>console.log('server started on port:',port)) 