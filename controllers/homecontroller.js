const Project =require('../models/project');

module.exports.homepage= async function(req,res){
    const projects=await Project.find({});
    return res.render('home',{
        data:"data from controller by using ejs",
        allprojects:projects
        
    })
}