import Mobile from "../models/Mobile.js"




 const postMobile =async (req,res)=>{
    const {
         name,
         company,
         image,
         price,
         description}=req.body
 
   const newMobile= new Mobile({
    name:name,
   company:company,
    image:image,
    price:price,
    description:description

   })

   const savedMobile= await newMobile.save();
   
       
       res.json({
          success:true,
          data:savedMobile,
          message:"New Mobile Added Successfully"
       })
 
 
 }

const getMobiles = async(req,res)=>{


   const allMobiles = await Mobile.find().sort({updateddAt: -1})

    res.json({
       success:true,
       data:allMobiles,
       message:"All Mobile Fetch Successfully"
    })
 }




const getMobileId =async(req,res)=>{
    const {id} = req.params

    const mobile = await Mobile.findById(id)
    
    res.json({
       success:mobile ? true: false,
       data:mobile || null,
       message:mobile ? "Mobile Fetch Successfully" : "Mobile not found"
    })
 }

const putMobileID= async(req,res)=>{

        const{
           name,
           company,
           image,
           price,
           description}=req.body
        
        const {id} = req.params
      await Mobile.updateOne({_id:id},{
      $set:{
         name:name,
         company:company,
         image:image,
         price:price,
         description:description
      }
     })

     const updatedMobile = await Mobile.findById(id)

     res.json({
      success:true,
      message:`Mobile Updated Successfully`,
      data:updatedMobile
     })
 }

const deleteMobileID =async(req,res)=>{
        const {id}=req.params
        
        await Mobile.deleteOne({_id:id})
      
        
           res.json({
              success:true,
              message:"Mobile Deleted Successfully",
              data:null 
           })
        
}

export  
        { 
          postMobile,
          getMobiles,
          getMobileId,
          putMobileID,
          deleteMobileID
        }