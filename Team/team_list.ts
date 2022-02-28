import { Cities } from "../Geography/cities";
import { Goalie } from "../Player/player_info/Goalie";
import { Skater } from "../Player/player_info/Skater";
import { TeamAcronyms, TeamNames } from "./team_enum";
import { TeamInfoTemplate } from "./team_info_int";
import { TeamRecord } from "./team_record";

export class NHL_TEAM implements TeamInfoTemplate {
    constructor(
        public team_name: TeamNames,
        public team_acro: TeamAcronyms, 
        public location: Cities, 
        private roster: (Skater|Goalie)[],
        public record: TeamRecord
        ){}

    play_game = () => {
        this.roster.forEach(player => player.play_game())
    }
}