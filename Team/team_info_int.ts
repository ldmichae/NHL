import { Cities } from "../Geography/cities";
import { TeamAcronyms, TeamNames } from "./team_enum";

export interface TeamInfoTemplate {
    team_name: TeamNames,
    team_acro: TeamAcronyms,
    location: Cities,
}