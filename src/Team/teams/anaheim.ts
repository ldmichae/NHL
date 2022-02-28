import { Cities } from "../../Geography/cities";
import { frederik_anderson, sebastian_aho } from "../../Player/player_list";
import { TeamAcronyms, TeamNames } from "../team_enum";
import { NHL_TEAM } from "../team_list";
import { TeamRecord } from "../team_record";

export const anaheim_ducks: NHL_TEAM = new NHL_TEAM(
    TeamNames.anaheim_ducks,
    TeamAcronyms.anaheim_ducks,
    Cities.anaheim,
    [sebastian_aho, frederik_anderson],
    new TeamRecord
);