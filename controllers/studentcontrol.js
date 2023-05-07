
const studentModel = require('../models/studentmodel')

const studentRouter =require('express').Router();



// create a student details

studentRouter.post("/createstudent",async(req,res)=>{

try{
    let std= await studentModel.findOne({email:req.body.email})
    console.log(std);
    if(!std){
    let std= await studentModel.create(req.body)
    res.status(200).send({message:"student created successfully"})
    }else{
        res.status(400).send({message:"student created failed"})
    }
} catch(error){
    res.status(400).send({message:"internal server error"})
    error
}

})


// get one particular student detail by email id

studentRouter.get("/std",async(req,res)=>{
    try{
        let student = await studentModel.findOne({email:req.body.email})
        res.status(200).send({message:"student detail here...!!!", student})
        
    }catch(error){
        res.status(400).send({message:"internal sever error .!!!"})
    }
})


// get all students -
studentRouter.get("/allstudent",async(req,res)=>{
    try{
        let students = await studentModel.find()
        res.status(200).send({message:"student details here...!!!", students})
        
    }catch(error){
        res.status(400).send({message:"internal sever error .!!!"})
    }
})

//assigned students details in particular mentor:

studentRouter.get("/allstd/:mentorId",function(req,res,next){
    const{ mentorId}=req.params;
    if(!mentorId){
       return  res.status(400).json({
            success:false,
    message:"mentor_Id not fetched",
    error:"no mentor_Id found"
        })
    }
    


    studentModel.find({mentorId:mentorId}).then((response)=>{
    
        if(response&&response.length>0){
    return res.status(200).json({
        success:true,
        message:"students are collected",
        data:response
    });
    }
    else{
        return res.status(200).json({
            success:true,
            message:"  student are not assigned",
            data:response
        });
    }
    
    }).catch((error)=>{
        return res.status(401).json({
            success:false,
            message:"no students found",
            error :error
        });
    })
    
       
    })

   // change mentor

   studentRouter.put("/:id", async(req,res,next)=>{
   try {
    let stud= await studentModel.findOne({_id:req.params.id})
    console.log(stud);
    if(stud){
        
         stud.mentorId=req.body.mentorId

        await stud.save()
       //  let stud = await studentModel.updateOne({mentorId:req.params.mentorId})
        res.status(200).send({stud,message:"mentor changed successfully...!"})
    }else{
        res.status(400).send({message:"mentor changed failed...!"})
    }
   } catch (error) {
    res.status(500).send({error,message:"internal server error...!"})
   }
   })


module.exports=studentRouter