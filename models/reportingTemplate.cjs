const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const timeTypeConfigForRolesSchema = new mongoose.Schema(
	{
		role: {
			type: String,
			required: false,
		},
		timeTypes: {
			type: [String],
			required: false,
		},
	},
	{ _id: false }
);

const reportingTemplateSchema = new Schema(
	{
		type: {
			type: String,
			required: true,
		},
		_partitionKey: {
			type: String,
			required: true,
		},
		colorScheme: {
			type: Number,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		quantityUnit: {
			type: Number,
			required: false,
		},
		reportingContext: {
			type: [Schema.Types.ObjectId],
			required: true,
		},
		roles: {
			type: [String],
			required: true,
		},

		timeTypeConfigForRoles: [timeTypeConfigForRolesSchema],

		timeTypes: {
			type: [String],
			required: true,
		},
		sortOrder: {
			type: Number,
			required: true,
		},
	},
	{ collection: "ReportingTemplates" }
);

module.exports = mongoose.model("ReportingTemplate", reportingTemplateSchema);
