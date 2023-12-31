const express=require('express');
const router=express.Router();
const issuecontroller=require('../controllers/issuecontroller');

router.get('/createissue/:id',issuecontroller.issueform);
router.post('/addissue',issuecontroller.createissue);
router.get('/deleteissue/:id',issuecontroller.deleteissue);


module.exports=router;