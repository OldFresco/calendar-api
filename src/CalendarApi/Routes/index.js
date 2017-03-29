import MetaController from '../Controllers/MetaController'
import WorkingDayController from '../Controllers/WorkingDayController'
import { Router } from 'express'

const routes = new Router()

routes.get('/meta', MetaController.get)
routes.get('/', WorkingDayController.get)

export default routes