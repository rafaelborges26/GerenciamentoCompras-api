import { Router } from 'express';

import CreateParcel from '../services/CreateParcel'

const parcelRouter = Router()

parcelRouter.post('/', async (request, response) => {
    const { value, quantity, due_date, order_id } = request.body

    const createParcel = new CreateParcel
    
    const parcel = await createParcel.execute({
        value,
        quantity,
        due_date, 
        order_id
    })

    if(parcel) {
        return response.json(parcel)
    } else {
        return response.status(400)
    }

})

export default parcelRouter