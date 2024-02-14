import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
    name: 'templates',
})
export class Template {
    @PrimaryGeneratedColumn()
    template_id: number;

    @Column()
    name: string;
}
