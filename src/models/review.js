const mongoose = require("mongoose");

/*============================================================================
// Review schema.
============================================================================*/
var ReviewSchema = new mongoose.Schema ({
	user: {
		type: mongoose.Schema.Types.ObjectId, 
		ref: 'User'
	},
	postedOn: {
		type: Date, 
		default: Date.now
	},
	rating: {
		type: Number, 
		required: true, 
		min: 1, 
		max: 5
	},
	review: {
		type: String
	}
});

var Review = mongoose.model("Review", ReviewSchema);

module.exports = {Review};