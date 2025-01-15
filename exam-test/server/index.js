const express = require('express')
const app = express()
const port = 8080
const mongoose = require('mongoose');
const Router =require("./route/routerProduct")
const cors = require("cors");



app.use(cors())
app.use(express.json())
app.use("/api/products" ,Router)





mongoose.connect('mongodb+srv://farideaazmp202:farideaazmp202@cluster0.prbin.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  console.log('Connected!')});


