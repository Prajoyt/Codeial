module.exports.home=function(req,res){
    console.log(req.cookies);//to get the cookie from web
    res.cookie('user_id',234556);
    return res.render('home',{
        title:"Home",
    })
}
 module.exports.item=function(req,res){
    return res.end ( '<h1> Item is exported and is running</h1>')
 }
/*module.actionName=function(req,res){

}*/