const Project =require('../models/project');

module.exports.projectform=function(req,res){
    return res.render('createproject',{
        title:"createproject"
    })
}

module.exports.createproject= async function(req,res){
    try{
        const project= await Project.create(req.body);
    return res.redirect('back');
    }catch{
        return res.redirect('back');
        
    }
   
}