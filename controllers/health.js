const getHealth=(req,res)=>
    {
      res.json({
                  success:true,
                  message:"server is up and  running...."
              })
    }


   export{
           getHealth
         }