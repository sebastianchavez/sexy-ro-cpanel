import { Login } from "src/login/entities/login.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('char')
export class Char {
    @PrimaryGeneratedColumn()
    char_id: number;

    @Column()
    agi: number;
  
    @Column()
    ap: number;
  
    @Column()
    base_exp: number;
  
    @Column()
    body: number;
  
    @Column()
    char_num: number;
  
    @Column()
    child: number;
  
    @Column()
    clan_id: number;
  
    @Column()
    class: number;
  
    @Column()
    clothes_color: number;
  
    @Column()
    con: number;
  
    @Column()
    crt: number;
  
    @Column()
    delete_date: number;
  
    @Column()
    dex: number;
  
    @Column()
    elemental_id: number;
  
    @Column()
    fame: number;
  
    @Column()
    father: number;
  
    @Column()
    font: number;
  
    @Column()
    guild_id: number;
  
    @Column()
    hair: number;
  
    @Column()
    hair_color: number;
  
    @Column()
    head_bottom: number;
  
    @Column()
    head_mid: number;
  
    @Column()
    head_top: number;
  
    @Column()
    homun_id: number;
  
    @Column()
    hotkey_rowshift: number;
  
    @Column()
    hotkey_rowshift2: number;
  
    @Column()
    hp: number;
  
    @Column()
    int: number;
  
    @Column()
    inventory_slots: number;
  
    @Column()
    job_exp: number;
  
    @Column()
    job_level: number;
  
    @Column()
    karma: number;
  
    @Column({ type: 'time' })
    last_login: Date;
  
    @Column()
    last_map: string;
  
    @Column()
    last_x: number;
  
    @Column()
    last_y: number;
  
    @Column()
    luk: number;
  
    @Column()
    manner: number;
  
    @Column()
    max_ap: number;
  
    @Column()
    max_hp: number;
  
    @Column()
    max_sp: number;
  
    @Column()
    mother: number;
  
    @Column()
    moves: number;
  
    @Column()
    name: string;
  
    @Column()
    online: number;
  
    @Column()
    option: number;
  
    @Column()
    partner_id: number;

    @ManyToOne((type) => Login, (l) => l.account_id)
    @JoinColumn({ name: 'account_id' })
    account_id;
}