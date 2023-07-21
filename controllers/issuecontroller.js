const Project=require('../models/project');
const Issue=require("../models/issue");

module.exports.issueform=function(req,res){
    const project=req.params.id;
    return res.render('createissue',{
        project_id:project

    })
}
module.exports.createissue= async function(req,res){
    const project= await Project.findById(req.body.project);
    
    if(project){
        try{
            
            const issue= await Issue.create(req.body);
            
            project.issues.push(issue);
            project.save();
        return res.redirect('/back');
        }catch{
            return res.redirect('back');
            
        }
    }
    
}