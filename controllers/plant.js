const plants=[
    {
       "id": 5,
       "name": "Bamboo",
       "category": "indoor",
       "image": "https://assets-news.housing.com/news/wp-content/uploads/2020/09/04155857/Vastu-tips-for-keeping-bamboo-plant-at-home-FB-1200x700-compressed.jpg",
       "price": 200,
       "description": "Bamboo Plants Benefits: Nutrients, Preparation,"
   },
   {
    "id": 2,
    "name": "rose",
    "category": "outdoor",
    "image": "https://assets-news.housing.com/news/wp-content/uploads/2020/09/04155857/Vastu-tips-for-keeping-bamboo-plant-at-home-FB-1200x700-compressed.jpg",
    "price": 250,
    "description": "ROSE Plants "
 },
 {
    "id": 8,
    "name": "mango",
    "category": "indoor",
    "image": "https://assets-news.housing.com/news/wp-content/uploads/2020/09/04155857/Vastu-tips-for-keeping-bamboo-plant-at-home-FB-1200x700-compressed.jpg",
    "price": 150,
    "description": "MANGO Plants"
 }
 ]

 const postPlant = (req,res)=>{
    const {
         name,
         category,
         image,
         price,
         description}=req.body
 
 if(!name){
  return res.json({
    success:false,
    data:null,
    message:"name cannot be empty.."
   })
 }
 if(!category){
    return res.json({
      success:false,
      data:null,
      message:"category cannot be empty.."
     })
   }
   if(!image){
    return res.json({
      success:false,
      data:null,
      message:"image cannot be empty.."
     })
   }
   if(!price){
    return res.json({
      success:false,
      data:null,
      message:"price cannot be empty.."
     })
   }
   if(!description){
    return res.json({
      success:false,
      data:null,
      message:"descriptioncannot be empty.."
     })
   }
   
 
       const randomId=Math.round(Math.random() * 10000)
   
       const newPlant={
          id:randomId,
          name:name,
          category:category,
          image:image,
          price:price,
          description:description
       }
 
       plants.push(newPlant)
       
       res.json({
          success:true,
          data:newPlant,
          message:"new plant added successfully"
       })
 
 
 }


const getPlants = (req,res)=>{
    res.json({
       success:true,
       data:plants,
       message:"all plant fetch successfully"
    })
 }

 const getPlantId =(req,res)=>{
    const {id} = req.params
    const plant = plants.find((p)=>p.id==id)
    
    res.json({
       success:plant ? true: false,
       data:plant || null,
       message:plant ? "Plant Fetch Successfully" : "Plant not found"
    })
    }

    const putPlantID=(req,res)=>{

        const{
           name,
           category,
           image,
           price,
           description}=req.body
        
        const {id} = req.params
     
     
         let index=-1
     
         plants.forEach((plant,i)=>{
         if(plant.id==id){
         index=i
       }
        })
     
        const newObj={
           id,
           name,
           category,
           image,
           price,
           description
     
        }
        if(index==-1){
           return res.json({
              success:false,
              message: `plant not found for id ${id}`,
              data:null
           })
        }
          else{
           plants[index]=newObj
           return res.json({
              success:true,
              message:"plant updated successfully",
              data:newObj
           })
          }
     
        res.json({
           success: true,
           data:index,
           message: "Plant updated Successfully"
        })
     
     }



     const deletePlantID =(req,res)=>{
        const {id}=req.params
           let index=-1
        
           plants.forEach((plant,i)=>{
              if(plant.id==id){
                 index=i
              }
                 
           })
        
           if(index==-1){
              return res.json({
                 success:false,
                 message:`plant not found with id ${id}`,
                   
              })
           }
        
           plants.splice(index,1)
        
           res.json({
              success:true,
              message:"plant deleted successfully",
              data:null 
           })
        
        }

 export  { 
    postPlant,
    getPlants,
    getPlantId ,
    putPlantID,
    deletePlantID
 }