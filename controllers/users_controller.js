const User = require('../models/user');

module.exports.profile = function (req, res) {
  return res.render('users', {
    title: "Users",
  })
}

//render sign up page  from  view folder 
module.exports.signUp = (req, res) => {
  if(req.isAuthenticated()){
     return res.redirect('/users/profile');
  }


  return res.render('user_sign_up', {
    title: "Codeial|SignUp"
  })
};
module.exports.signIn = (req, res) => {

  if (req.isAuthenticated()) {
   return  res.redirect('/users/profile')
  }

  return res.render('user_sign_in', {
    title: "Codeial|SignIn"
  })
};


/*get the sign up data
module.exports.create = (req, res) => {

  if (req.body.password != req.body.confirm_password) {
    return res.redirect('back');
  }

  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      console.log("Error in finding user in signing up");
      return
    }

    if (!user) {
      User.create(req.body, function (err, user) {
        if (err) { console.log("Error in creating user in signing up"); return }

        return res.redirect('/users/sign-in')


      })
    } else {
      return res.redirect('back');
    }
  })


  module.exports.create = async function(req, res){
    //TODO
    if (req.body.password != req.body.confirm_password) {
        return res.redirect("back");
      }
      let user = await User.findOne({ email: req.body.email });
      //console.log(user);
      if (!user) {
        //console.log(user);
        await User.create(req.body);
        //console.log(a);
        return res.redirect("/users/sign-in");
      }
      return res.redirect("back");


}



} */

module.exports.create = async function (req, res) {

  if (req.body.password != req.body.confirm_password) {
    return res.redirect('back');
  }

  let user = await User.findOne({ email: req.body.email });

  if (!user) {
    await User.create(req.body);
    return res.redirect('/users/sign-in');
  }
  return res.redirect("back");
}







//get the sign in data
module.exports.createSession = (req, res) => {
  return res.redirect('/');
}



// module.exports.home=function(req,res){
//   return res.end('<h1> Codeial is running for social media app</h1>');
// }