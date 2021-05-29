import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AlterOrderAddIdProduct1620783831834 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('order', new TableColumn({
            name: 'product_id',
            type: 'uuid',
            isNullable: true
        })
        )
        
        await queryRunner.createForeignKey('order', new TableForeignKey({
            name: 'OrderProduct', //name da FK
            columnNames: ['product_id'], //campo nessa tabela
            referencedColumnNames: ['id'], //campo da outra tabela
            referencedTableName: 'product', //nome da outra tabela
            onDelete: 'SET NULL',  //restricted, não deixa o user ser apagado. - set null, seta o campo como null - cascade: deletou o usuario deleta todos os agendamentos que ele ta associado
            onUpdate: 'CASCADE',
        }) 
        )
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('order', 'OrderProduct')

        await queryRunner.dropColumn('order', 'product_id')
    }

}
