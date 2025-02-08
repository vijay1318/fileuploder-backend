let express=require("express")
const multer = require("multer")
const {add,get} = require("../control/imgcon")


let route=new express.Router()

let storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"./upload")
    },
    filename:function(req,file,cb){
        const uniquesuffix=Date.now()+"-"+Math.round(Math.round()*1E9 )
        cb(null,file.fieldname+"-"+uniquesuffix+"."+file.mimetype.split("/")[1])
    }
})
const upload=multer({storage:storage})
route.post("/upd",upload.single("file"),add)
route.get("/get/:n",get)
module.exports=route