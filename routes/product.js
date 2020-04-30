var express = require('express');
var router = express.Router();

/* GET home page. */
//router.get('/',function(req,rres,next){
//  res.render('index',{title:'Express'});    
//});


router.get('/product',function(req,res){
    res.send('Hello!')
})

router.post('/product',function(req,res){
    res.send('Got a Product request')
})

router.put('/product',function(req,res){
    res.send('Got a Product request at /user')
})

router.delete('/product',function(req,res){
    res.send('Got a DELETE Product request at /user')
})

module.exports =router;