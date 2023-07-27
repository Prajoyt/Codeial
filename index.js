const express= require('express');

const app=express();

const port =8000;


app.listen(port,(error)=>{
    if(error){
        console.log("Error in running the server ",port,error);
    }
    console.log(`Server is running successfully at ${port}`);
})