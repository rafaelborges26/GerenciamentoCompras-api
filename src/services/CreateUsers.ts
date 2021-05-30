import User from '../models/User'
import { getRepository } from 'typeorm'
import { hash } from 'bcryptjs'

interface Request {
    name: string
    email: string
    password: string
    celnumber: string
}

class CreateUserService {
    public async execute({ name, email, password, celnumber }:Request): Promise<User> { //return no formato do model definido

        const usersRepository = getRepository(User) //obter funções do repository, delete, insert..
        const checkUserExists = await usersRepository.findOne({
            where: { email: email }//campo igual ao valor q to recebendo
        })

        if(checkUserExists) {
            throw new Error('Email already used.')            
        }

        const hashedPassword = await hash(password, 8)
        const user = usersRepository.create({
            name,
            email,
            celnumber,
            password: hashedPassword
        })

        await usersRepository.save(user)

        return user

    }
}

export default CreateUserService
