const mongoose=require('mongoose');

const IssueSchema=new mongoose.Schema({
    title:{
        type:String, 
        required:true,
        unique:true
    },
    description:{
        type:String, 
        required:true 
    },
    label:{
        type:String, 
        required:true 
        
    },
    author:{
        type:String, 
        required:true
    },project:{
        type:String, 
        required:true
    }
},
{
    timestamps:true
});




const Issue=mongoose.model('Issue',IssueSchema);

module.exports=Issue;