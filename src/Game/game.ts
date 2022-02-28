import { NHL_TEAM } from "../Team/team_list";
import { game_result, game_type } from "./result";
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

    start_game = () => {
        this.home_team.play_game();
        this.away_team.play_game();
    }

    record_results = () => {
        this.result.winner.record_win();
        this.result.win_type === game_type.regulation ? 
            this.result.loser.record_loss() : 
            this.result.loser.record_ot_loss()
    }
}