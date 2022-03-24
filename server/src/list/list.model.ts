import { Column, Model, DataType, Table } from 'sequelize-typescript';

interface CreateListAttrs {
  title: string;
}

@Table({ tableName: 'lists' })
export class List extends Model<List, CreateListAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, unique: false })
  title: string;
}
