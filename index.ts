import { NHL_GAME } from "./Game/game";
import { game_result, game_type } from "./Game/result";
import { TeamStats } from "./Game/team_stats";
import { Cities } from "./Geography/cities";
import { teuvo_teravainen } from "./Player/player_list";
import { anaheim_ducks } from "./Team/teams/anaheim";
import { phoenix_coyotes } from "./Team/teams/phoenix";

const game_instance = new NHL_GAME(
    phoenix_coyotes,
    anaheim_ducks,
    new Date(Date.now()),
    Cities.phoenix,
    new game_result(phoenix_coyotes, anaheim_ducks, game_type.regulation, 2, 1),
    new TeamStats,
    new TeamStats
)

game_instance.start_game();
game_instance.record_results();