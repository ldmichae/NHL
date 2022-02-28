import { Player } from "./Player";
import { PlayerStats } from "../statistics_int";
import { positions } from "../enums/position_enum";
import { penalties } from "../enums/penalty_enum";
import { TeamNames } from "../../Team/team_enum";

export class Skater extends Player {
    constructor(
        public firstname: string,
        public lastname: string,
        public position: positions,
        public rating: number,
        public team: TeamNames,
        public stats: PlayerStats
    ){
        super(firstname, lastname, position, rating, team, stats);
    }
    
}