import { getRepository } from 'typeorm'
import Client from '../models/Client'


class GetClientService {
    public async execute(): Promise<Client[]> {

        try {

            const clientRepository = getRepository(Client)

            const client = await clientRepository.find()
           
            return client
        }catch(err) {
            console.log(err)
        }
    }
}

export default GetClientService