const auth = require('basic-auth');
const {User} = require('../models/user'); 

/*============================================================================
// This middleware function attempts to match the user's credentials with
// an entry in the database to see if the user is logged in. If successful, 
// the user will be authenticated granting access to functionality.
// Otherwise, access will be denied and an error will be thrown. The basic
// auth NPM module is utilized.
============================================================================*/
function authentication(req, res, next) {
	var credentials = auth (req);
	
	if (!credentials) {
		var err = new Error("Username and password must be valid.");
		err.status = 401;
		next(err);
	} else {
		User.userAuthentication(credentials.name, credentials.pass, function(err, user) {
			if (err || !user) {
				var error = new Error("An error has occurred during authentication.");
				res.status = 401;
				next(err);
			} else {
				req.user = user;
				next();
			}
		});
	}	
}

module.exports.authentication = authentication;