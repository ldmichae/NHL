import { TeamNames } from "../Team/team_enum";
import { positions } from "./enums/position_enum";
import { Goalie } from "./player_info/Goalie";
import { Skater } from "./player_info/Skater";
import { GoalieStats, PlayerStats } from "./statistics_int";

export const sebastian_aho = new Skater(
    "sebastian",
    "aho",
    positions.center,
    94,
    TeamNames.anaheim_ducks,
    new PlayerStats()
)

export const teuvo_teravainen = new Skater(
    "teuvo",
    "teravainen",
    positions.rightwing,
    93,
    TeamNames.phoenix_coyotes,
    new PlayerStats()
)

export const frederik_anderson = new Goalie(
    "frederik",
    "andersen",
    positions.goalie,
    90,
    TeamNames.anaheim_ducks,
    new GoalieStats()
)

export const marc_andre_fleury = new Goalie(
    "marc-andre",
    "fleury",
    positions.goalie,
    90,
    TeamNames.phoenix_coyotes,
    new GoalieStats()
)