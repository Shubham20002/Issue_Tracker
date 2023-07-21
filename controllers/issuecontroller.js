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
        return res.redirect('back');
        }catch{
            return res.redirect('back');
            
        }
    }
    
}

module.exports.deleteissue= async function(req,res){
    const issue=await Issue.findById(req.params.id);
    const issueid=issue.project;
    await Issue.deleteOne({ _id: req.params.id });
    // Project.findByIdAndUpdate(issueid,{$pull:{issues:req.params.id}})
    return res.redirect('back');

}