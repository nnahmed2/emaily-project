if (process.env.NODE_ENV === "production") {
	//we are in production, return the prod set of keys
	module.exports = require("./prod");
} else {
	//return dev set of keys
	module.exports = require("./dev");
}

/*
mongodb+srv://user:9tadRhsSFOSPUzQY@cluster0.vooyy.mongodb.net/emaily-prod?retryWrites=true&w=majority
*/
