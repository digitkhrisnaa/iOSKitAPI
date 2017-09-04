import express from 'express'
import bodyParser from 'body-parser'
import routes from './routes'
import initializeDB from './db'

const app = express()

//Middleware

/*
*	Currently disable until used mongoDB
*/
/*initializeDB( db => {
	app.use(bodyParser.urlencoded({ extended: false }))
	app.use('/api/v0_1', routes)
	app.use(express.static('public'))
})*/

	app.use(bodyParser.urlencoded({ extended: false }))
	app.use('/api/v0_1', routes)
	app.use(express.static('public'))

export default app