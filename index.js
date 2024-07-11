import express from "express"
import dotenv from "dotenv"
dotenv.config()

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

app.use(express.json())

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