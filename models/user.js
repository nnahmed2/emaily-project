const mongoose = require("mongoose");
// this is the same as const Schema = mongoose.Schema;
const { Schema } = mongoose;

const userSchema = new Schema({
	googleID: String,
});

mongoose.model("users", userSchema);
