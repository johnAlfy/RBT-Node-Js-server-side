import {Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./User";
import {Report} from "./Report";
import {Bus} from "./Bus";

@Entity()
export class Driver extends User{
    @OneToMany(type => Report, report => report.driver)
    reports: Report[];

    @OneToOne(type => Bus, bus=>bus.driver)
    @JoinColumn()
    bus:Bus;

    @Column()
    bus_number:String;
}
