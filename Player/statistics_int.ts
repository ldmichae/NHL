export class PlayerStats {
    constructor(
        public goals: number = 0,
        public assists: number = 0,
        public penalty_minutes: number = 0, 
        public games_played: number = 0,
    ){}
}

export class GoalieStats extends PlayerStats{
    constructor(
        public goals: number = 0,
        public assists: number = 0,
        public penalty_minutes: number = 0,
        public games_played: number = 0,
        public saves: number = 0,
        public goals_allowed: number = 0,
        public shots_faced: number = 0,
        public save_percentage: number = 0,
        public shutouts: number = 0
    ){
        super(goals, assists, penalty_minutes, games_played)
    }
}