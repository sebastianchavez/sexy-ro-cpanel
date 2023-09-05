import { Column, Entity } from "typeorm";

@Entity('pvpranking')
export class PvpRanking {
    @Column({primary: true})
    char_id: number;

    @Column()
    name: string;

    @Column()
    kill: number;

    @Column()
    death: number;
}