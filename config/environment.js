const development={
    name:"development",
    db:'mongodb://localhost/Issue_Tracker',
    PORT:8000
    
}

const production={
    name:"production",
    db:process.env.issuetrackerdb,
    PORT:process.env.PORT
}

module.exports=eval(process.env.Tracker_Env)== undefined ? development :eval(process.env.Tracker_Env) ;