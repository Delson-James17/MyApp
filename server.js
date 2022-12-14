const express = require("express")
const bodyParser =require("body-parser")

const app = express()

//Middleware
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//routes
const viewerRoutes = require ("./routes/Viewer")

app.use('/viewer', viewerRoutes)

const port = 3000

app.listen(port,()=>{
  console.log("Listening to Port:",port)
})