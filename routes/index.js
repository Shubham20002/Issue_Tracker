const express=require('express');
const router=express.Router();
const homecontroller=require('../controllers/homecontroller')

router.get('/',homecontroller.homepage);

router.use('/project',require('./project'));
router.use('/issue',require('./issue'));

module.exports=router;