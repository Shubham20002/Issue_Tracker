const Project =require('../models/project');
const Issue=require('../models/issue')

module.exports.projectform=function(req,res){
    return res.render('createproject',{
        title:"createproject"
    })
}

module.exports.createproject= async function(req,res){
    try{
        const project= await Project.create(req.body);
    return res.redirect('/');
    }catch{
        return res.redirect('back');
        
    }
   
}

module.exports.pd= async function(req,res){
    
        const project=await Project.findById(req.params.id).populate('issues').exec();
    return res.render('projectdetail',{
        projectinfo:project
    })
}

module.exports.issuebylable=async function(req,res){
    console.log(req.params.id)

    const project=await Project.findById(req.body.project).populate({
        path: 'issues',
        match: { label:  req.body.label  },
        
      }).exec();
    return res.render('projectdetail',{
     projectinfo:project
        
    })
}

module.exports.deleteproject=async function(req,res){
  

await Project.deleteOne({ _id: req.params.id });
await Issue.deleteMany({project:req.params.id});
  return res.redirect('back');

}