
const mentorModel = require('../models/mentormodel')

const mentorRouter =require('express').Router();


mentorRouter.post("/creatementor",async(req,res)=>{

try{
    let mentor= await mentorModel.findOne({email:req.body.email})
    console.log(mentor);
    if(!mentor){
    let mentor= await mentorModel.create(req.body)
    res.status(200).send({message:"mentor created successfully"})
    }else{
        res.status(400).send({message:"mentor created failed"})
    }
} catch(error){
    res.status(400).send({message:"internal server error"})
    error
}

})


mentorRouter.get("/men",async(req,res)=>{
    try{
        let mentor = await mentorModel.findOne({email:req.body.email})
        res.status(200).send({message:"mentor detail here...!!!", mentor})
        
    }catch(error){
        res.status(400).send({message:"internal sever error .!!!"})
    }
})


mentorRouter.get("/allmentor",async(req,res)=>{
    try{
        let mentors = await mentorModel.find()
        res.status(200).send({message:"mentor details here...!!!", mentors})
        
    }catch(error){
        res.status(400).send({message:"internal sever error .!!!"})
    }
})

mentorRouter.post("/add_student",async(req,res)=>{

try {
    const ment =await mentorModel.insertOne(req.body);
    
} catch (error) {
    
}

})




module.exports=mentorRouter