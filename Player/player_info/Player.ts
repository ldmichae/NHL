import { positions } from "../enums/position_enum";

export abstract class Player {
    constructor(
        public firstname: string,
        public lastname: string,
        public position: positions,
        public rating: number,
        public team: string,
    ){}  
};