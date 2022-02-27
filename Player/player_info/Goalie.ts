import { Player } from "./Player";
import { positions } from "../enums/position_enum"; 
import { GoalieStats } from "../statistics_int";
import { penalties } from "../enums/penalty_enum";

export class Goalie extends Player {
    constructor(
        public firstname: string,
        public lastname: string,
        public position: positions,
        public rating: number,
        public team: string,
        public stats: GoalieStats
    ){
        super(firstname, lastname, position, rating, team);
    }

    public score_goal = (): void => {
        this.stats.goals++
    }
    public tally_assist = (): void => {
        this.stats.assists++
    }
    public play_game = (): void => {
        this.stats.games_played++
    }
    public take_penalty = (minutes: penalties): void => {
        this.stats.penalty_minutes += minutes
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