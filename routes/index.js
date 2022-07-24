const controlRouter = require('./control');
const monitorRouter = require('./monitor');
const Auth          = require('../middleware/auth');
const passport		= require('passport');
function route(app){

    app.get('/', Auth.isLoggedIn, (req, res) => {
        res.render("index", { title: "Home" });
    });
    
    app.get('/login', Auth.isLoggedOut, (req, res) => {
        const response = {
            title: "Login",
            error: req.query.error
        }
        res.render('login', response);
    });  
    
    app.post('/login', passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login?error=true'
    }));
    
    app.get('/logout', function (req, res) {
        req.logout(function(err) {
            if (err) { return next(err); }
            res.redirect('/');
          });
    });

    app.use('/control', controlRouter);
    app.use('/monitor', monitorRouter);

}

module.exports = route;