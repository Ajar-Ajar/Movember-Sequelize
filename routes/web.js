var colors  = require('colors');
var express = require('express');
var d       = require('./../lib/MiniLogger');
var User    = require('./../lib/UserModel');

var router = express.Router();

router.get('/',function(req, res) {
  res.render('homepage');
});

router.get('/users/new', function(req, res) {
  res.render('addUser');
});
//--------------------
//    GET ALL USERS
//--------------------
router.get('/users', function(req, res, next) {

  User.find().exec()
      .then(function(users) {
        d('num users found: '.magenta , users.length);
        res.render('usersList',{users:users});
      })
      .catch(function(err){
        d('DB ERROR:'.red,err.message);
        next(err);
      });

});
//-------------------------
//    GET SPECIFIC USER
//-------------------------
router.get('/users/edit/:id', function(req, res,next) {

  User.findById(req.params.id).exec()
      .then(function(user) {
        d('user found: '.magenta , user.first_name);
        res.render('updateUser',{user:user});
      })
      .catch(function(err){
        d('DB ERROR:'.red,err.message);
        next(err);
      });

});

module.exports = router;
