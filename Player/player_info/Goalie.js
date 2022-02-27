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
exports.Goalie = void 0;
var Player_1 = require("./Player");
var Goalie = /** @class */ (function (_super) {
    __extends(Goalie, _super);
    function Goalie(firstname, lastname, position, rating, team, stats) {
        var _this = _super.call(this, firstname, lastname, position, rating, team) || this;
        _this.firstname = firstname;
        _this.lastname = lastname;
        _this.position = position;
        _this.rating = rating;
        _this.team = team;
        _this.stats = stats;
        _this.score_goal = function () {
            _this.stats.goals++;
        };
        _this.tally_assist = function () {
            _this.stats.assists++;
        };
        _this.play_game = function () {
            _this.stats.games_played++;
        };
        _this.take_penalty = function (minutes) {
            _this.stats.penalty_minutes += minutes;
        };
        _this.make_save = function (qty) {
            if (qty === void 0) { qty = 1; }
            _this.stats.saves += qty;
            _this.stats.shots_faced += qty;
            _this.update_save_percentage;
        };
        _this.allow_goal = function (qty) {
            if (qty === void 0) { qty = 1; }
            _this.stats.goals_allowed += qty;
            _this.stats.shots_faced += qty;
            _this.update_save_percentage;
        };
        _this.record_shutout = function () {
            _this.stats.shutouts++;
        };
        return _this;
    }
    Object.defineProperty(Goalie.prototype, "update_save_percentage", {
        get: function () {
            return this.stats.save_percentage = +(this.stats.saves / this.stats.shots_faced).toFixed(3);
        },
        enumerable: false,
        configurable: true
    });
    return Goalie;
}(Player_1.Player));
exports.Goalie = Goalie;
