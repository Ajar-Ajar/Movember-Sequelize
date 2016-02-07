var colors      = require('colors');
var express     = require('express');
var bodyParser  = require('body-parser');
var d           = require('./../lib/MiniLogger');
var User        = require('./../lib/UserModel');
var mongoose    = require('./../lib/db');

var router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

//routes
//--------------------
//    CREATE  user
//--------------------
router.post('/addUser',function(req, res,next) {

    var user = new User({_id        : mongoose.Types.ObjectId(),
                         first_name : req.body.first_name,
                         last_name  : req.body.last_name,
                         email      : req.body.email});

    user.save()
        .then(function() {
            res.redirect('/users');
        })
        .catch(function(err){
            d('DB ERROR:'.red,err.message);
            next(err);
        });

});
//--------------------
//    UPDATE  user
//--------------------
router.post('/updateUser',function(req, res,next) {

    d('updateUser, user_id: '.magenta,req.body.user_id);

    User.findOneAndUpdate(  {_id:req.body.user_id},
                            {
                                first_name : req.body.first_name,
                                last_name  : req.body.last_name,
                                email      : req.body.email
                            })
                            .exec()
                            .then(function(numAffected){
                                res.redirect('/users');
                            })
                            .catch(function(err){
                                d('DB ERROR:'.red,err.message);
                                next(err);
                            });
});
//--------------------
//    DELETE  user
//--------------------
router.delete('/deleteUser/:id', function(req, res, next) {
    d('deleteUser, user_id: '.magenta,req.params.id);

    User.remove({_id:req.params.id}).exec()
        .then(function () {
            res.send('user was removed!!!');
        })
        .catch(function(err){
            d('DB ERROR:'.red,err.message);
            next(err);
        });
});


module.exports = router;
