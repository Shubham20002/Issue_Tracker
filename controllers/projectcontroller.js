const Project =require('../models/project');

module.exports.createproject= async function(req,res){
    try{
        const project= await Project.create(req.body);
    return res.redirect('back');
    }catch{
        return res.redirect('back');
        console.log('error while user adding');
    }
   
}