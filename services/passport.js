const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((user, done) => {
	User.findById(id).then((user) => {
		done(null, user);
	});
});

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: "/auth/google/callback",
			proxy: true, //so it can fix redirect problem (i.e. tells Google to trust a proxy)
		},
		(accessToken, refreshToken, profile, done) => {
			User.findOne({ googleID: profile.id }).then((existingUser) => {
				if (existingUser) {
					//Two arguments, the first argument is the error
					done(null, existingUser);
				} else {
					new User({ googleID: profile.id })
						.save()
						.then((user) => done(null, user));
				}
			});
		}
	)
);
