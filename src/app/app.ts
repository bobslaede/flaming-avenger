/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, bootstrap, NgFor} from 'angular2/angular2'
import {RouteConfig, RouterOutlet, RouterLink, Router, Location} from 'angular2/router';
import {Home} from './home/home';

@Component({
    selector: 'my-app'
})
@RouteConfig([
    { path: '/home', as: 'home', component: Home}
])
@View({
    directives: [NgFor, RouterOutlet],
    template: `
            <div>
                <router-outlet></router-outlet>
            </div>
    `
})
export class MyApp {


    constructor(private router:Router) {

        this.router.navigate('/home');

    }


}