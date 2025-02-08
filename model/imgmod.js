let mongoose=require("mongoose")
let imgsch=new mongoose.Schema({
    "_id":String,
    "name":String,
    "img":String
})
let im=mongoose.model("imgs",imgsch)

module.exports=im