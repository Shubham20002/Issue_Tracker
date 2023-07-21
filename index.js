const express=require('express');
const port=8000;
const app=express();

//setup view engine
app.set("view engine",'ejs');
app.set("views","./views");
//use express router
app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err){
        console.log("error while server starting");
    }
    console.log("server start on port no :"+port);
})