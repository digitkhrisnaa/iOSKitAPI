import express from 'express'
import templateController from './controller/templateController'

const routes = express()

/**
*	iOSKit Template routes
*/
routes.get('/template/', new templateController().index)
routes.post('/template/', new templateController().save)
routes.put('/template/', new templateController().update)
routes.delete('/template/', new templateController().delete)

export default routes