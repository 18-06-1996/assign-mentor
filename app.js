const express =require('express')
const mongoose= require('mongoose')
const bodyParser = require('body-parser');
const cors=require('cors');
const {db_url} = require('./common/dbconfig');
const mentorRouter = require('./controllers/mentorcontrol');
const studentRouter = require('./controllers/studentcontrol');

//server
const server = express()

//database
mongoose.connect(db_url);

//middleware section

server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:true}));





//register motels
server.use("/api/mentor",mentorRouter);
server.use("/api/student",studentRouter);


module.exports=server