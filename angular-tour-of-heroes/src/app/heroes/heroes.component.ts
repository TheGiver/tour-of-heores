import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { HEROES } from '../data_source/heroes/mock-heroes';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css'],
    encapsulation: ViewEncapsulation.Emulated
})

export class HeroesComponent implements OnInit {
    heroes = HEROES;
    
    constructor() {}

    ngOnInit(): void {}
};