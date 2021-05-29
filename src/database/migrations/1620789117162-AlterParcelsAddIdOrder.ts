import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AlterParcelsAddIdOrder1620789117162 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.addColumn('parcels', new TableColumn({
            name: 'order_id',
            type: 'uuid',
            isNullable: true
        })
        )

        await queryRunner.createForeignKey('parcels', new TableForeignKey({
            name: 'ParcelsOrder',
            columnNames: ['order_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'order',
            onDelete: 'CASCADE',  //restricted, não deixa o user ser apagado. - set null, seta o campo como null- cascade: deletou o usuario deleta todos os agendamentos que ele ta associado
            onUpdate: 'CASCADE',
        }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('parcels', 'ParcelsOrder')

        await queryRunner.dropColumn('parcels', 'order_id')
    }

}
