import { Router } from 'express';

import CreateOrder from '../services/CreateOrder'

const orderRouter = Router()

orderRouter.post('/', async (request, response) => {
    const { description, valueTotal, qt_parcels_total, type_payment, product_id } = request.body

    const createOrder = new CreateOrder
    
    const order = await createOrder.execute({
        description,
        valueTotal,
        qt_parcels_total,
        type_payment,
        product_id
    })

    if(order) {
        return response.json(order)
    } else {
        return response.status(400)
    }

})

export default orderRouter