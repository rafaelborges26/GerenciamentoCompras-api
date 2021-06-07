import { Router } from 'express';

import CreateProduct from '../services/CreateProduct'

import GetProduct from '../services/GetProduct'

const productRouter = Router()

productRouter.post('/', async (request, response) => {
    const { name, description, price } = request.body

    const createProduct = new CreateProduct
    
    const product = await createProduct.execute({
        name,
        description,
        price
    })

    if(product) {
        return response.json(product)
    } else {
        return response.status(400)
    }

})

productRouter.get('/', async (request, response) => {
    const getProduct = new GetProduct

    const product = await getProduct.execute()

    return response.json(product)

})

export default productRouter