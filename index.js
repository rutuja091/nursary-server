import express from "express"
import dotenv from "dotenv"
dotenv.config()
import mongoose from "mongoose"
import cors from "cors"
import {getHealth } from "./controllers/health.js"

import {
   postMobile,
   getMobiles,
   getMobileId,
   putMobileID,
   deleteMobileID
       } from "./controllers/mobile.js"


import{handlePageNotFound} from "./controllers/errors.js"


const app= express()
app.use(cors())
app.use(express.json())



//database connection
const dbConnection=async()=>{
   const conn = await mongoose.connect(process.env.MONGO_URL)

   if (conn){
      console.log("MongoDB connected successfully...📦")
   }
   else{
      console.log("MongoDB not connected...❌")
   }
}

dbConnection();



app.get("/health", getHealth)

app.post("/mobile", postMobile)

app.get("/mobiles", getMobiles)

app.get("/mobile/:id", getMobileId)

app.put("/mobile/:id", putMobileID)

app.delete("/mobile/:id", deleteMobileID)

app.use("*",handlePageNotFound)

 const PORT = process.env.PORT

 app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
 })