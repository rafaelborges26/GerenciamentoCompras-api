import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn} from 'typeorm'
import Order from './Order'


@Entity('parcels')
class Parcel {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    value: number

    @Column()
    quantity: number

    @Column()
    due_date: Date

    @ManyToOne(() => Order)
    @JoinColumn({name: 'id'})
    @Column()
    order_id: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

}

export default Parcel
