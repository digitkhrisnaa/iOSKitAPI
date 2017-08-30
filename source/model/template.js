import mongoose, { Schema } from 'mongoose'

mongoose.Promise = global.Promise

const templateSchema = new Schema({
	name: {
		type: String
	},
	url: {
		type: String
	},
	bundleID: {
		type: String
	}
})

const template = mongoose.model(process.env.COL_TEMPLATE, templateSchema)
export default template