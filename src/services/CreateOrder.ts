import Order from '../models/Order'
import { getRepository } from 'typeorm'

interface Request {
    description: string,
    valueTotal: number,
    qt_parcels_total: number,
    type_payment: string,
    due_date: string,
    product_id: string,
}

class CreateOrderService {
    public async execute({ description, valueTotal, qt_parcels_total, type_payment, due_date, product_id }:Request): Promise<Order> {

    try {
        const orderRepository = getRepository(Order) //obter funções do repository, delete, insert..
    
        //criando as parcelas

        const valueParcel = valueTotal/qt_parcels_total

        for (let index = 0; index < qt_parcels_total; index++) {
            
            //1 parcela

            //mais de uma parcela

            
        }

        const order = orderRepository.create({
            description,
            valueTotal,
            qt_parcels_total,
            type_payment,
            due_date,
            product_id,
        })

        await orderRepository.save(order)

        //inserir as parcelas


        return order
    }catch(err) {
        console.log(err)
    }
    }
}

export default CreateOrderService
