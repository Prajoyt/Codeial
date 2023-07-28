const express= require('express');

const cookieParser=require('cookie-parser')
const app=express();

const port =8000;

const expressLayouts=require('express-ejs-layouts');

const db=require('./config/mongoose')


app.use(express.urlencoded());

app.use(cookieParser());





//static file
app.use(express.static('./assets'));


app.use(expressLayouts);

app.set('layout extractStyles',true);
app.set('layout extractScripts',true);


//use express router

app.use('/',require('./routes/index'))

//set up view engine

app.set('view engine', 'ejs');

app.set('views','./views');


app.listen(port,(error)=>{
    if(error){
        console.log("Error in running the server ",port,error);
    }
    console.log(`Server is running successfully at ${port}`);
})