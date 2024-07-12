import Plant from "./../models/Plant.js"




 const postPlant =async (req,res)=>{
    const {
         name,
         category,
         image,
         price,
         description}=req.body
 
   const newPlant= new Plant({
    name:name,
    category:category,
    image:image,
    price:price,
    description:description

   })

   const savedPlant = await newPlant.save();
   
       
       res.json({
          success:true,
          data:savedPlant,
          message:"new plant added successfully"
       })
 
 
 }

const getPlants = async(req,res)=>{



   const allPlants = await Plant.find()

    res.json({
       success:true,
       data:allPlants,
       message:"all plant fetch successfully"
    })
 }




const getPlantId =async(req,res)=>{
    const {id} = req.params

    const plant = await Plant.findById(id)
    
    res.json({
       success:plant ? true: false,
       data:plant || null,
       message:plant ? "Plant Fetch Successfully" : "Plant not found"
    })
 }

const putPlantID= async(req,res)=>{

        const{
           name,
           category,
           image,
           price,
           description}=req.body
        
        const {id} = req.params
      await Plant.updateOne({_id:id},{
      $set:{
         name:name,
         category:category,
         image:image,
         price:price,
         description:description
      }
     })

     const updatedPlant = await Plant.findById(id)

     res.json({
      success:true,
      message:`plant updated successfully`,
      data:updatedPlant
     })
 }

const deletePlantID =async(req,res)=>{
        const {id}=req.params
        
        await Plant.deleteOne({_id:id})
      
        
           res.json({
              success:true,
              message:"plant deleted successfully",
              data:null 
           })
        
}

export  
        { 
          postPlant,
          getPlants,
          getPlantId,
          putPlantID,
          deletePlantID
        }