import { Column, Model, DataType, Table } from 'sequelize-typescript';
// 2
interface TodoCreateAttr {
  title: string;
  description: string;
}

@Table({ tableName: 'todo' })
export class Todo extends Model<Todo, TodoCreateAttr> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, unique: false })
  title: string;

  @Column({ type: DataType.STRING, unique: false })
  description: string;
}
