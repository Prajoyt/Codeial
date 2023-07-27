module.exports.home=function(req,res){
    return res.render('home',{
        title:"Home",
    })
}
 module.exports.item=function(req,res){
    return res.end ( '<h1> Item is exported and is running</h1>')
 }
/*module.actionName=function(req,res){

}*/