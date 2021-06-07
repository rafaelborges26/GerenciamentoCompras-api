import { Router, request, response } from 'express'

import CreateUsers from '../services/CreateUsers'

//import ensureAuthenticated from '../middlewares/ensureAuthenticated'

const usersRouter = Router()


usersRouter.post('/', async (request, response ) => {

        const { name, email, password, celnumber } = request.body

        const createUser = new CreateUsers

        const user = await createUser.execute({
            name,
            email,
            password,
            celnumber,
        })

        if(user) {
            return response.json(user)
        }else {
            return response.status(400)
        }
})

export default usersRouter
