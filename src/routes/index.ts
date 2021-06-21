import { Router } from 'express'

import productRoutes from './product.routes'
import sessionsRoutes from './session.routes'
import usersRouter from './user.routes'
import clientRoutes from './client.routes'
import orderRoutes from './order.routes'
import parcelRoutes from './parcel.routes'


const routes = Router()

routes.use('/product',productRoutes)
routes.use('/sessions', sessionsRoutes)
routes.use('/users',usersRouter)
routes.use('/client',clientRoutes)
routes.use('/order', orderRoutes)
routes.use('/parcel', parcelRoutes)

export default routes