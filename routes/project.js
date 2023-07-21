const express=require('express');
const router=express.Router();
const projectcontroller=require('../controllers/projectcontroller');

router.get('/createproject',projectcontroller.projectform);
router.post('/addproject',projectcontroller.createproject);

module.exports=router;