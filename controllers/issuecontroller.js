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
            // console.log(req.body)
            const issue= await Issue.create(req.body);
            const issueid=issue.project;
            project.issues.push(issue);
            project.save();
        return res.redirect(`/project/pd/${issueid}`);
        }catch{
            return res.redirect('back');
            
        }
    }
    
}

module.exports.deleteissue= async function(req,res){
    
    const issue=await Issue.findById(req.params.id);
    const projectid=issue.project;
    await Issue.deleteOne({ _id: req.params.id });
   const del= await Project.findByIdAndUpdate(projectid,{$pull:{issues:req.params.id}});
   console.log(del);
   
    // console.log(`/project/pd/${issueid}`);
    return res.redirect(`/project/pd/${projectid}`);
}
