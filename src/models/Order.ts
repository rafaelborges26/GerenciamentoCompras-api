import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from 'typeorm'

@Entity('order')
class Order {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    description: string

    @Column()
    valueTotal: number

    @Column()
    qt_parcels_total: number

    @Column()
    type_payment: string

    @Column()
    due_date: Date

    @Column()
    product_id: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

}

export default Order
