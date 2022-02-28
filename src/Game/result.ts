import { NHL_TEAM } from "../Team/team_list";

export enum game_type {
    regulation = 'reg',
    overtime = 'ot'
}
export class game_result {
    constructor(
        public winner: NHL_TEAM,
        public loser: NHL_TEAM,
        public win_type: game_type,
        public home_score: number,
        public away_score: number,
    ){}
    
}