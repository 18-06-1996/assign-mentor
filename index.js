const express = require('express');
const server = require('./app')






const PORT= 7000;

const app = express();
// const dotenv = require('dotenv')




app.use("/",server)






app.listen(PORT,()=>{
    console.log(`app started in port:${PORT}`);
})