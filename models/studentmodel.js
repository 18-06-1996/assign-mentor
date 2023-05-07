const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema({
  
    mentorId:{
type:mongoose.Schema.Types.ObjectId,
required:true
    },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("students", StudentSchema);