import express from 'express'
import templateController from './controller/templateController'
import exportController from './controller/exportController'

const routes = express()

/**
*	iOSKit Template routes
*	Currently disable
routes.get('/template/', new templateController().index)
routes.post('/template/', new templateController().save)
routes.put('/template/', new templateController().update)
routes.delete('/template/', new templateController().delete)
*/

/**
*	iOSKit Export IPA routes
*/
routes.post('/export/', new exportController().simpleExport)

export default routes