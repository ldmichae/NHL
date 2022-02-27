import { NHL_TEAM } from "../Team/team_list";

export class game_result {
    constructor(
        public winner: NHL_TEAM,
        public home_score: number,
        public away_score: number,
    ){}
    
}