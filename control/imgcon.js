const im = require("../model/imgmod")
let {v4}=require("uuid")

let add=async(req,res)=>{
    try{
   // console.log(req.file.orginalname.split(".")[0]);
        
    let data=new im({...req.body,"_id":v4(),"img":req.file.filename,"name":req.file.originalname})
    await data.save()
    console.log(req.file)
    res.json({"img":req.file})
    }
    catch(err){
        res.send("error in adding")
    }
}
let get=async(req,res)=>{
    try{
        let data=await im.find({"name":req.params.n})
        res.json(data)
    }
    catch(err){
        res.send("error in geting")
    }
}
module.exports={add,get}