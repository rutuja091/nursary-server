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
          message:"New Plant Added Successfully"
       })
 
 
 }

const getPlants = async(req,res)=>{


   const allPlants = await Plant.find().sort({updateddAt:-1})

    res.json({
       success:true,
       data:allPlants,
       message:"All Plant Fetch Successfully"
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
      message:`Plant Updated Successfully`,
      data:updatedPlant
     })
 }

const deletePlantID =async(req,res)=>{
        const {id}=req.params
        
        await Plant.deleteOne({_id:id})
      
        
           res.json({
              success:true,
              message:"Plant Deleted Successfully",
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