const express=require('express');
const router=express.Router();
const issuecontroller=require('../controllers/issuecontroller');

router.get('/createissue',issuecontroller.issueform);
router.post('/addissue',issuecontroller.createissue);

module.exports=router;