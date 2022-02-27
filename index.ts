import { Goalie } from "./Player/player_info/Goalie";
import { penalties } from "./Player/enums/penalty_enum";
import { positions } from "./Player/enums/position_enum";
import { Skater } from "./Player/player_info/Skater";
import { GoalieStats, PlayerStats } from "./Player/statistics_int";

const sebastian_aho = new Skater(
    "sebastian",
    "aho",
    positions.center,
    94,
    "Carolina Hurricanes",
    new PlayerStats()
)

const frederik_anderson = new Goalie(
    "frederik",
    "andersen",
    positions.goalie,
    90,
    "Carolina Hurricane",
    new GoalieStats()
)
console.log(sebastian_aho.stats);
sebastian_aho.score_goal(10);
sebastian_aho.take_penalty(penalties.doubleminor)
sebastian_aho.tally_assist(3);
sebastian_aho.tally_assist(4);
console.log(sebastian_aho.stats)

console.log("save %:", frederik_anderson.stats.save_percentage);
frederik_anderson.make_save(5);
console.log("save %:", frederik_anderson.stats.save_percentage);
frederik_anderson.allow_goal(3);
console.log("save %:", frederik_anderson.stats.save_percentage);
frederik_anderson.make_save();
console.log("save %:", frederik_anderson.stats.save_percentage);
