
/*
 * Sample Welcome page Controller
 * 
 * @package Sleek.js
 * @version 1.0
 * @author Robin <robin@cubettech.com>
 * @Date 23-10-2013
 */

//index function
var passport = require('passport');
var indexController = {
    index:function(req, res){
        var data = {
            title: "Sleek.js"
        }
        //load index.html from home directory
        system.loadView(res,'home/index', data);
    },
    login:function(req, res){

        var data = {
            title: "Sleek.js"
        }
        //load index.html from home directory
        system.loadView(res,'home/login', data);
    },

    logincheck:function(req, res){  
        console.log(req.user);   
        res.send('hello');
    }

}

module.exports = indexController;