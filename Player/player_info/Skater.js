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
exports.Skater = void 0;
var Player_1 = require("./Player");
var Skater = /** @class */ (function (_super) {
    __extends(Skater, _super);
    function Skater(firstname, lastname, position, rating, team, stats) {
        var _this = _super.call(this, firstname, lastname, position, rating, team) || this;
        _this.firstname = firstname;
        _this.lastname = lastname;
        _this.position = position;
        _this.rating = rating;
        _this.team = team;
        _this.stats = stats;
        _this.score_goal = function (qty) {
            if (qty === void 0) { qty = 1; }
            if (qty && qty <= 0)
                throw new Error("Quantity must be positive");
            _this.stats.goals += qty;
        };
        _this.tally_assist = function (qty) {
            if (qty === void 0) { qty = 1; }
            if (qty && qty <= 0)
                throw new Error("Quantity must be positive");
            _this.stats.assists += qty;
        };
        _this.play_game = function (qty) {
            if (qty === void 0) { qty = 1; }
            if (qty && qty <= 0)
                throw new Error("Quantity must be positive");
            _this.stats.games_played += qty;
        };
        _this.take_penalty = function (minutes) {
            _this.stats.penalty_minutes += minutes;
        };
        return _this;
    }
    return Skater;
}(Player_1.Player));
exports.Skater = Skater;
