const express=require('express');

const router=express.Router();

const homeController=require('../controllers/home_controller');



//like app.get we have router.get
router.get('/',homeController.home);

router.get('/item',homeController.item);


router.use('/users', require('./users'));

router.use('/post',require('./post'));


router.use('/cat',require('./tiger'));

/*for any router
 router.use('routerName',require(./routerfile))*/



console.log("Router is loaded");
module.exports=router;