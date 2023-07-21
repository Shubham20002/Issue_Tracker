const express=require('express');
const router=express.Router();
const projectcontroller=require('../controllers/projectcontroller')

router.post('/createproject',projectcontroller.createproject);

module.exports=router;