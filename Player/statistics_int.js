"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoalieStats = exports.PlayerStats = void 0;
var PlayerStats = /** @class */ (function () {
    function PlayerStats(goals, assists, penalty_minutes, games_played) {
        if (goals === void 0) { goals = 0; }
        if (assists === void 0) { assists = 0; }
        if (penalty_minutes === void 0) { penalty_minutes = 0; }
        if (games_played === void 0) { games_played = 0; }
        this.goals = goals;
        this.assists = assists;
        this.penalty_minutes = penalty_minutes;
        this.games_played = games_played;
    }
    return PlayerStats;
}());
exports.PlayerStats = PlayerStats;
var GoalieStats = /** @class */ (function (_super) {
    __extends(GoalieStats, _super);
    function GoalieStats(goals, assists, penalty_minutes, games_played, saves, goals_allowed, shots_faced, save_percentage, shutouts) {
        if (goals === void 0) { goals = 0; }
        if (assists === void 0) { assists = 0; }
        if (penalty_minutes === void 0) { penalty_minutes = 0; }
        if (games_played === void 0) { games_played = 0; }
        if (saves === void 0) { saves = 0; }
        if (goals_allowed === void 0) { goals_allowed = 0; }
        if (shots_faced === void 0) { shots_faced = 0; }
        if (save_percentage === void 0) { save_percentage = 0; }
        if (shutouts === void 0) { shutouts = 0; }
        var _this = _super.call(this, goals, assists, penalty_minutes, games_played) || this;
        _this.goals = goals;
        _this.assists = assists;
        _this.penalty_minutes = penalty_minutes;
        _this.games_played = games_played;
        _this.saves = saves;
        _this.goals_allowed = goals_allowed;
        _this.shots_faced = shots_faced;
        _this.save_percentage = save_percentage;
        _this.shutouts = shutouts;
        return _this;
    }
    return GoalieStats;
}(PlayerStats));
exports.GoalieStats = GoalieStats;
