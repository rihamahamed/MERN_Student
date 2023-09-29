const mongoose = require ("mongoose")

const StudentSchema = new mongoose.Schema({
    name:
    {
        type:String,
        require:true
    },
    gender:
    {
        type:String,
        require:true
    },
    email:
    {
        type:String,
        require:true,
        unique:true
    },
    mobileNo:
    {
        type:Number,
        require:true,
        unique:true
    }
})

const StudentModel = mongoose.model("students", StudentSchema)
module.exports=StudentModel