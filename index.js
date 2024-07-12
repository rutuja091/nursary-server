import express from "express"
import dotenv from "dotenv"
dotenv.config()
import mongoose from "mongoose"
import cors from "cors"
import {getHealth } from "./controllers/health.js"

import {
        postPlant,
        getPlants,
        getPlantId,
        putPlantID,
        deletePlantID
       } from "./controllers/plant.js"
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
      console.log("mongoDB not connected...❌")
   }
}

dbConnection();



app.get("/health", getHealth)

app.post("/plant", postPlant)

app.get("/plants", getPlants)

app.get("/plant/:id", getPlantId)

app.put("/plant/:id", putPlantID)

app.delete("/plant/:id", deletePlantID)

app.use("*",handlePageNotFound)

 const PORT = process.env.PORT

 app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
 })