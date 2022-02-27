import { positions } from "./enums/position_enum";
import { Goalie } from "./player_info/Goalie";
import { Skater } from "./player_info/Skater";
import { GoalieStats, PlayerStats } from "./statistics_int";

export const sebastian_aho = new Skater(
    "sebastian",
    "aho",
    positions.center,
    94,
    "Carolina Hurricanes",
    new PlayerStats()
)

export const frederik_anderson = new Goalie(
    "frederik",
    "andersen",
    positions.goalie,
    90,
    "Carolina Hurricane",
    new GoalieStats()
)