const mongoose = require("mongoose");

/*============================================================================
// Course schema.
============================================================================*/
var CourseSchema = new mongoose.Schema ({
	user: {
		type: mongoose.Schema.Types.ObjectId, 
		ref: 'User'
	},
	title: {
		type: String, 
		required: true
	},
	description: {
		type: String, 
		required: true
	},
	estimatedTime: {
		type: String
	},
	materialsNeeded: {
		type: String
	},
	steps: [{
		stepNumber: Number, 
		title: {
			type: String, 
			required: true
		}, 
		description: {
			type: String,
			required: true
		}
	}],
	reviews: [{
		type: mongoose.Schema.Types.ObjectId, 
		ref: 'Review'
	}]
});

var Course = mongoose.model('Course', CourseSchema);

module.exports = {Course};