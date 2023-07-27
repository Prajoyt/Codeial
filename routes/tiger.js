const express=require('express');

const router=express.Router();

const tigerController=require('../controllers/tiger_controller');


router.get('/dog',tigerController.Prajoyt);

module.exports=router;