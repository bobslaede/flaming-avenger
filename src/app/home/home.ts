/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View, ViewEncapsulation} from 'angular2/angular2';
import {Router} from 'angular2/router';

@Component({
    selector: 'home'
})
@View({
    encapsulation: ViewEncapsulation.Native,
    template: `
        <h1>home</h1>
    `
})
export class Home {

    private router:Router

    constructor(router:Router) {
        this.router = router;
    }
}