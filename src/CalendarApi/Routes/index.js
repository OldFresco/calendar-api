import MetaController from '../Controllers/metaController'
import WorkingDayController from '../Controllers/workingDayController'
import { Router } from 'express'

const routes = new Router()

routes.get('/meta', MetaController.get)
routes.get('/', WorkingDayController.get)

export default routes