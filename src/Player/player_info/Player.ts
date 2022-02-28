import { TeamNames } from "../../Team/team_enum";
import { penalties } from "../enums/penalty_enum";
import { positions } from "../enums/position_enum";
import { GoalieStats, PlayerStats } from "../statistics_int";

export abstract class Player {
    constructor(
        public firstname: string,
        public lastname: string,
        public position: positions,
        public rating: number,
        public team: TeamNames,
        public stats: (PlayerStats|GoalieStats)
    ){}  
    public score_goal = (qty: number = 1): void => {
        if (qty && qty <= 0)    throw new Error("Quantity must be positive");
        this.stats.goals += qty;
    }
    public tally_assist = (qty: number = 1): void => {
        if (qty && qty <= 0)    throw new Error("Quantity must be positive");
        this.stats.assists += qty
    }
    public play_game = (qty: number = 1): void => {
        if (qty && qty <= 0)    throw new Error("Quantity must be positive");
        this.stats.games_played += qty
    }
    public take_penalty = (minutes: penalties): void => {

        this.stats.penalty_minutes += minutes
    }
};