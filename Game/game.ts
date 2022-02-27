import { NHL_TEAM } from "../Team/team_list";
import { game_result } from "./result";
import { TeamStats } from "./team_stats";

export class NHL_GAME {
    constructor(
        public home_team: NHL_TEAM,
        public away_team: NHL_TEAM,
        public date: Date,
        public location: string,
        public result: game_result,
        public home_stats: TeamStats,
        public away_stats: TeamStats
    ){}
}