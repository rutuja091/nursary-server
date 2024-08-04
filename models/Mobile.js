import {Schema ,model} from "mongoose"


const mobileSchema = new Schema
({
       name:String,
       company:String,
       image: String,
       price:Number,
       description: String
},{
      timestamps:true 
})

const Mobile = model("Mobile" , mobileSchema)

export default Mobile
