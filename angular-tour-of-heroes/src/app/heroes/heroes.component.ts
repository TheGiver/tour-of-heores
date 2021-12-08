import { Component, OnInit} from '@angular/core';
import { Hero } from '../interfaces/heroes/hero';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    hero: Hero = {
        id: 1,
        name: 'Windstorm'
    }
}