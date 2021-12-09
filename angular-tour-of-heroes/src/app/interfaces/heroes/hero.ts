import { Statistics } from "../hero_statistics/statistics";

export interface Hero {
    id: number, 
    image: string
    name: string,
    statistics: Statistics,
    summary: string
};