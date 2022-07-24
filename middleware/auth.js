const Auth = {
    isLoggedIn: function (req, res, next) {
        if (req.isAuthenticated()) return next();
        res.redirect('/login');
    },
    
    isLoggedOut: function (req, res, next) {
        if (!req.isAuthenticated()) return next();
        res.redirect('/');
    }
    
}

module.exports = Auth;