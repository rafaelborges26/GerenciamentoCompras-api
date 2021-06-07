import { getRepository } from 'typeorm'
import Product from '../models/Product'


class GetProductService {
    public async execute(): Promise<Product[]> {

        try {

            const productRepository = getRepository(Product)

            const product = await productRepository.find()
           
            return product
        }catch(err) {
            console.log(err)
        }
    }
}

export default GetProductService