module.exports.homepage=function(req,res){
    return res.render('home',{
        data:"data from controller by using ejs"
    })
}