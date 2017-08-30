import express from 'express'
import routes from './routes'
import initializeDB from './db'

const app = express()

//Middleware

initializeDB( db => {
	app.use('/api/v0_1', routes)
})

app.use(express.static('public'))

export default app