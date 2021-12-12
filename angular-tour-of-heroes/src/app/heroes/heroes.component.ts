import { Component, OnInit} from '@angular/core';
import { HEROES } from '../data_source/heroes/mock-heroes';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
    heroes = HEROES;
    numberOfHeroes = this.heroes;
    numberOfSlides = this.numberOfHeroes;

    slideConfig={
        "slidesToShow": this.numberOfHeroes,
        "slidesToScroll": this.numberOfSlides,
        "dots": true,
        "infinite": false
    };

    slickInit(e: any) {
        console.log('msg: slick carousel | extra details: ' + e);
    }

    breakpoint(e: any) {
        console.log('msg: breakpoint | extra details: ' + e);
    }

    afterChange(e: any) {
        console.log("msg: afterChange | extra details: " + e);
    }

    beforeChange(e: any) {
        console.log("msg: beforeChange | extra details: " + e);
    }

    constructor() {}

    ngOnInit(): void {}
};