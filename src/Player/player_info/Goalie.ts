import { Player } from "./Player";
import { positions } from "../enums/position_enum"; 
import { GoalieStats } from "../statistics_int";
import { TeamNames } from "../../Team/team_enum";

export class Goalie extends Player {
    constructor(
        public firstname: string,
        public lastname: string,
        public position: positions,
        public rating: number,
        public team: TeamNames
        ,
        public stats: GoalieStats
    ){
        super(firstname, lastname, position, rating, team, stats);
    }

    public make_save = (qty: number = 1): void => {
        this.stats.saves += qty;
        this.stats.shots_faced += qty;
        this.update_save_percentage;
    }
    public allow_goal = (qty: number = 1): void => {
        this.stats.goals_allowed += qty;
        this.stats.shots_faced += qty;
        this.update_save_percentage;
    }
    private record_shutout = (): void => {
        this.stats.shutouts++;
    }
    get update_save_percentage(): number{
        return this.stats.save_percentage = +(this.stats.saves / this.stats.shots_faced).toFixed(3)
    }
}