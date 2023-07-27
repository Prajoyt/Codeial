const express=require('express');

const router=express.Router();

const homeController=require('../controllers/home_controller');



//like app.get we have router.get
router.get('/',homeController.home);

router.get('/item',homeController.item);

console.log("Router is loaded");
module.exports=router;