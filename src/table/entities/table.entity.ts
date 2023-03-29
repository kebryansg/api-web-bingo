import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: "table" })
export class Table {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  codTable: string;

  @Column()
  typeTable: string;

  @Column()
  data: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  creationDate: Date;

  @UpdateDateColumn()
  updateDate: Date;
}
