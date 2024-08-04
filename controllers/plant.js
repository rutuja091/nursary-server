import Plant from "../models/Plant.js"

 const postPlant = async(req,res)=>{
        const {
            name ,
            category ,
            image ,
            price , 
            description} = req.body


        const newplant = new Plant({
              name:name,
              category:category,
              image:image,
              price:price,
              description:description
          })
        
        const savedplant = await newplant.save();
         
            res.json({
             successs:true,
             data: savedplant,
              message:"new plant added successfilly" 
            })
      }

     const getPlants = async (req,res)=>{

       const allplants = await Plant.find().sort({createdAt: -1})

        res.json({
          successs:true,
          data: allplants,
          message:"all plants fetched  successfully" 
        })
      }

     const getPlantId = async (req,res)=>{
        const {id}=req.params
       const plant = await Plant.findById(id)
         res.json({
         successs:plant ? true : false,
         data: plant ? plant : null,
         message:plant ? " plant fetched  successfully"  : " plant not found"
       })
     }


     const putPlantId = async (req,res)=>{
        const {
          name ,
         category ,
          image ,
          price , 
          description} = req.body
      
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

         const Updatedplant = await Plant.findById(id)

         res.json({
          success:true,
          message:"plant Updated Successfully",
          Data:Updatedplant
         })
      
       
     }

     const deletePlantID = async(req,res)=>{
        const {id} = req.params
         await Plant.deleteOne({
          _id:id
         })
      
      res.json({
            successs:true,
            data: null,
            message:"plant deleted successfully"
          })
        }


      export {
        postPlant ,
        getPlants,
        getPlantId,
        putPlantId,
        deletePlantID
       
      }