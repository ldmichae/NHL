import { Cities } from "../../Geography/cities";
import {marc_andre_fleury, teuvo_teravainen } from "../../Player/player_list";
import { TeamAcronyms, TeamNames } from "../team_enum";
import { NHL_TEAM } from "../team_list";
import { TeamRecord } from "../team_record";

export const phoenix_coyotes: NHL_TEAM = new NHL_TEAM(
    TeamNames.phoenix_coyotes,
    TeamAcronyms.phoenix_coyotes,
    Cities.phoenix,
    [teuvo_teravainen, marc_andre_fleury],
    new TeamRecord
);