/*import Parcel from '../models/Parcel'
import { getRepository } from 'typeorm'

interface Request {
    value: number,
    quantity: number, 
    due_date: Date, 
    order_id: string
}

class CreateParcelService {
    public async execute({ value, quantity, due_date, order_id, }:Request): Promise<Parcel> {

    try {
        const parcelRepository = getRepository(Parcel) //obter funções do repository, delete, insert..
        
        const parcel = parcelRepository.create({
            value, quantity, due_date, order_id
        })

        await parcelRepository.save(parcel)

        return parcel
    }catch(err) {
        console.log(err)
    }

    }
}

export default CreateParcelService
*/