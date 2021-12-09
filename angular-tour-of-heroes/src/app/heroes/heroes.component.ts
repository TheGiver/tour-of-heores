import { Component, OnInit} from '@angular/core';
import { HEROES } from '../data_source/heroes/mock-heroes';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    heroes = HEROES;    
};