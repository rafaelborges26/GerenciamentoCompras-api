import { Router } from 'express'

import productRoutes from './product.routes'
import sessionsRoutes from './session.routes'
import usersRouter from './user.routes'
import clientRoutes from './client.routes'

const routes = Router()

routes.use('/product',productRoutes)
routes.use('/sessions', sessionsRoutes)
routes.use('/users',usersRouter)
routes.use('/client',clientRoutes)

export default routes