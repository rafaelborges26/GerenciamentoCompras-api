import { Router, request, response } from 'express'

import CreateClient from '../services/CreateClient'
import GetClient from '../services/GetClient'

//import ensureAuthenticated from '../middlewares/ensureAuthenticated'

const clientRouter = Router()


clientRouter.post('/', async (request, response ) => {

        const { name, email, celnumber, telnumber, adress } = request.body

        const createClient = new CreateClient

        const client = await createClient.execute({
            name,
            email,
            celnumber, 
            telnumber, 
            adress
        })

        if(client) {
            return response.json(client)
        }else {
            return response.status(400)
        }
})


clientRouter.get('/', async (request, response) => {
    const getClient = new GetClient

    const client = await getClient.execute()

    return response.json(client)

})


export default clientRouter
