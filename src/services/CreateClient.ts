import Client from '../models/Client'
import { getRepository } from 'typeorm'

interface Request {
    name: string
    email: string
    celnumber: string
    telnumber: string
    adress: string
}

class CreateClientService {
    public async execute({ name, email, celnumber, telnumber, adress }:Request): Promise<Client> { //return no formato do model definido

    try {
        const clientRepository = getRepository(Client) //obter funções do repository, delete, insert..
        const checkClientExists = await clientRepository.findOne({
            where: { email: email }
        })

        if(checkClientExists) {
            throw new Error('Email already used.')            
        }

        const client = clientRepository.create({
            name,
            email,
            celnumber,
            telnumber, 
            adress
        })

        await clientRepository.save(client)

        return client
    }catch(err) {
        console.log(err)
        throw new Error('Error found.')
        
    }
    }
}

export default CreateClientService
