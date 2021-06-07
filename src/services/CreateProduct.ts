import Product from '../models/Product'
import { getRepository } from 'typeorm'

interface Request {
    name: string
    description: string
    price: number
}

class CreateProductService {
    public async execute({ name, description, price }:Request): Promise<Product> {

    try {
        const productRepository = getRepository(Product) //obter funções do repository, delete, insert..
        const checkProductExists = await productRepository.findOne({
            where: { name : name }//campo igual ao valor q to recebendo
        })

        if(checkProductExists) {
            throw new Error('Product already exists.')            
        }

        const product = productRepository.create({
            name,
            description,
            price,
        })

        await productRepository.save(product)

        return product
    }catch(err) {
        console.log(err)
    }
    }
}

export default CreateProductService
