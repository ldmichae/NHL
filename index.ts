import { penalties } from "./Player/enums/penalty_enum";
import { frederik_anderson, sebastian_aho } from "./Player/player_list";

//testing functionality
sebastian_aho.score_goal(10);
sebastian_aho.take_penalty(penalties.doubleminor)
sebastian_aho.tally_assist(3);
console.log(sebastian_aho.stats)

frederik_anderson.make_save(5);
frederik_anderson.allow_goal(3);
frederik_anderson.make_save();
console.log("save %:", frederik_anderson.stats.save_percentage);

