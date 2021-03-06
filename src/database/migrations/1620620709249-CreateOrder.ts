import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateOrder1620620709249 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'order',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'description',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'valueTotal',
                        type: 'numeric',
                        isNullable: false,
                    },
                    {
                        name: 'qt_parcels_total',
                        type: 'int',
                        isNullable: false,
                    },
                    {
                        name: 'type_payment',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'due_date',
                        type: 'date',
                        isNullable: false,
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    }
                ] 
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('order');
    }

}
