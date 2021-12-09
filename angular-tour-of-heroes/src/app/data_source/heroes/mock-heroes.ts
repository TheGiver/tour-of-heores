import { Hero } from "src/app/interfaces/heroes/hero";
import { HEROES_STATISTICS } from "../heroes_statistics/mock-hero-statistics";

let batmanSummary: string = "";
let spidermanSummary: string = "";
let antmanSummary: string = "";
let aquamanSummary: string = "";
let theIncredibleHulkSummary: string = "";
let wonderwomanSummary: string = "";
let drStrangeSummary: string = "";
let faysalAlkharrazSummary: string = "";

let batmanImg: string = "";
let spidermanImg: string = "";
let antmanImg: string = "";
let aquamanImg: string = "";
let theIncredibleHulkImg: string = "";
let wonderwomanImg: string = "";
let drStrangeImg: string = "";
let faysalAlkharazImg: string = "";

export const HEROES: Hero[] = [
    { id: 1, image: batmanImg, name: 'Batman', statistics: HEROES_STATISTICS.get(1)!, summary: batmanSummary},
    { id: 2, image: spidermanImg, name: 'Spiderman', statistics: HEROES_STATISTICS.get(2)!, summary: spidermanSummary},
    { id: 3, image: antmanImg, name: 'Antman', statistics: HEROES_STATISTICS.get(3)!, summary: antmanSummary},
    { id: 4, image: aquamanImg, name: 'Aquaman', statistics: HEROES_STATISTICS.get(4)!, summary: aquamanSummary},
    { id: 5, image: theIncredibleHulkImg, name:'The Incredible Hulk', statistics: HEROES_STATISTICS.get(5)!, summary: theIncredibleHulkSummary},
    { id: 6, image: wonderwomanImg, name:'Wonderwoman', statistics: HEROES_STATISTICS.get(6)!, summary: wonderwomanSummary},
    { id: 7, image: drStrangeImg, name:'Dr. Strange', statistics: HEROES_STATISTICS.get(7)!, summary: drStrangeSummary},
    { id: 8, image: faysalAlkharazImg, name:'Faysal Al-Kharraz', statistics: HEROES_STATISTICS.get(8)!, summary: faysalAlkharrazSummary}
];