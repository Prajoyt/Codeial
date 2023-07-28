module.exports.profile= function(req,res){
  return res.render('users',{
    title:"Users",
  })
}

//render sign up page  from  view folder 
module.exports.signUp=(req,res)=>{
  return res.render('user_sign_up',{
    title:"Codeial|SignUp"
  })
};
module.exports.signIn=(req,res)=>{
  return res.render('user_sign_in',{
    title:"Codeial|SignIn"
  })
};


//get the sign up data
module.exports.create=(req,res)=>{
  //todo later
}

//get the sign in data
module.exports.createSession=(req,res)=>{
  //todo later
}



// module.exports.home=function(req,res){
//   return res.end('<h1> Codeial is running for social media app</h1>');
// }