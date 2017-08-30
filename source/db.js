import mongoose from 'mongoose'

export default callback => {
	mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, 
		{useMongoClient: true}, 
		(error) => {
		if (error) {
			console.log(error)
		} else {
			callback()
		}
	})
}