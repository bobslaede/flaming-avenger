/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';
import {Router} from 'angular2/router';

@Component({
    selector: 'user'
})
@View({
    template: `
        <h1>User</h1>
    `
})
export class User {

    private router:Router

    constructor(router:Router) {
        this.router = router;
    }
}