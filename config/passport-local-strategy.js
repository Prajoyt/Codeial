const passport = require('passport');

const localStrategy = require('passport-local').Strategy;

const User = require('../models/user');


//create authentication function 
//we are telling passport ot use local strategy wherein we define ahat is username field
passport.use(new localStrategy({
    //these is a syntax of passport.js
    usernameField: 'email'
},
    async function (email, password, done) {  //done is a callback function reporting back to passport
        //find the user and establish an identity
        let user = await User.findOne({
            email: email,
        })

        if (!user || user.password != password) {
            console.log("Invalid Passwordor Username");
            return done(null, false);
        }
        return done(null, user); //it is returning the user to serializer
    }

));
// serializing the user to decide which key is to be kept in the cookies
//telling only take user_id information and no  other information (browser to server)
passport.serializeUser(function(user, done){
    done(null, user.id);
});



// deserializing the user from the key in the cookies
// to kbow which id it is we need to deseralize it (user_id=id  from the user)
passport.deserializeUser(async function(id, done){
    // User.findById(id, function(err, user){
    //     if(err){
    //         console.log('Error in finding user --> Passport');
    //         return done(err);
    //     }

    //     return done(null, user);
    // });
    let userId = await User.findById(id);
    if(!userId){
        console.log("Error in config/ passport-local");
        return ;
    } 
    return done(null, userId);
});

//check if the user is authenicated or not
/*
passport.checkAuthentication = function (req, res, next){
    // if user is signed in , then pass on the request ot the next fucntion (controller's action) -middleware
if(req.isAuthenticated()){
      return next();
}


// if the user is not signed in
return res.redirect('/users/sign-in')
}
//set the function for the views it is middleware to check weather the user is signed in or not
passport.setAuthenticatedUser=function(req,res,next){
    if(req.isAuthenticated()){
         // currenct user data is stored in the req, so we are just storing its data to res.
        req.locals.user=req.user;
    }
    next();
}
 */
passport.checkAuthentication = function (req, res, next){
    // if user is signed in , then pass on the request ot the next fucntion (controller's action)
    if(req.isAuthenticated()){
        return next();
    }
    // if the user is not signed in
    return res.redirect('/users/sign-in');
}

passport.setAuthenticatedUser = function(req, res, next){
    if(req.isAuthenticated()){
        // currenct user data is stored in the req, so we are just storing its data to res.
        res.locals.user = req.user
    }
    next();
}









module.exports=passport;