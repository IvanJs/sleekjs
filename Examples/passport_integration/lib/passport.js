
var passport = require('passport');
passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    done(null, obj);
});
var LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username,password,done) {
   console.log(username)
      if (username!='abc') {
        return done(null, false);
      }
      else{
         return done(null, true);
      }
       
  }
));