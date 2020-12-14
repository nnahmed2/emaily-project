const passport = require("passport");

//app is an Express object
module.exports = (app) => {
	app.get(
		"/auth/google",
		passport.authenticate("google", {
			scope: ["profile", "email"],
		})
	);
	app.get("/auth/google/callback", passport.authenticate("google"));

	app.get("/api/logout", (req, res) => {
		req.logout();
		res.send(req.user);
	});

	//req represents the incoming requests, res represents the outgoing response
	app.get("/api/current_user", (req, res) => {
		res.send(req.user);
	});
};
