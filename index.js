const express= require('express');

const cookieParser=require('cookie-parser')
const app=express();

const port =8000;

const expressLayouts=require('express-ejs-layouts');

const db=require('./config/mongoose')

//export both passport and passpor local essential
const session=require('express-session');

const passport=require('passport');
const passportLocal=require('./config/passport-local-strategy');


const MongoStore=require('connect-mongo');

const flash = require('connect-flash');
// there must be work flow

app.use(express.urlencoded());

app.use(cookieParser());





//static file
app.use(express.static('./assets'));


app.use(expressLayouts);

app.set('layout extractStyles',true);
app.set('layout extractScripts',true);




//set up view engine

app.set('view engine', 'ejs');

app.set('views','./views');

//because we stored it
//mongostore is used to store an cookie in the db
app.use(session({
    name:"Codeial",
    secret:'blahsomething',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000*60*100) //like an otp how much time you have
    },
    store: MongoStore.create(
        {
            mongoUrl:'mongodb://0.0.0.0:27017/codeial_development',
            autoRemover : 'disabled'
        },
        function(err){
            console.log("Error in the mongo-store");
        }
    ),
}))

app.use(passport.initialize());
app.use(passport.session())


app.use(passport.setAuthenticatedUser); 
//next() will call routes which is affter these

app.use(flash());
//app.use(customMware.setFlash);


//use express router

app.use('/',require('./routes/index'))

app.listen(port,(error)=>{
    if(error){
        console.log("Error in running the server ",port,error);
    }
    console.log(`Server is running successfully at ${port}`);
})