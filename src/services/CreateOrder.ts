import Order from '../models/Order'
import { getRepository } from 'typeorm'
//import CreateParcel from '../services/CreateParcel'

interface Request {
    description: string,
    valueTotal: number,
    qt_parcels_total: number,
    type_payment: string,
    due_date: Date,
    product_id: string,
}

class CreateOrderService {
    public async execute({ description, valueTotal, qt_parcels_total, type_payment, due_date, product_id }:Request): Promise<Order> {

    try {
        const orderRepository = getRepository(Order) //obter funções do repository, delete, insert..
    
        //criando as parcelas

  //      const createParcel = new CreateParcel()

        const valueParcel = valueTotal/qt_parcels_total

        //inserir pedido

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


        console.log(order)
        for (let index = 0; index < qt_parcels_total; index++) {
            
            //1 parcela
            if(qt_parcels_total === 1) {
                console.log("1 parcela")
            //const parcel = await createParcel.execute({
            //    due_date,
            //    quantity,
            //    value: valueParcel,
            //    order_id: 
            //})
                
            }else {
                console.log("+ de 1 parcela")
            }

            //mais de uma parcela
        }

        return order
    }catch(err) {
        console.log(err)
    }
    }
}

export default CreateOrderService
