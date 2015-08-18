/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, bootstrap, NgFor} from 'angular2/angular2'
import {RouteConfig, RouterOutlet, RouterLink, Router, Location, routerDirectives} from 'angular2/router';
import {Home} from './home/home';
import {User} from './user/user';

@Component({
    selector: 'my-app'
})
@RouteConfig([
    { path: '/home', as: 'home', component: Home },
    { path: '/user', as: 'user', component: User },
])
@View({
    directives: [NgFor, RouterOutlet, routerDirectives],
    template: `
            <nav>
                <ul>
                    <li>
                        <a [router-link]="['/home']">Home</a>
                        <a [router-link]="['/user']">User</a>
                    </li>
                </ul>
            </nav>
            <div>
                <router-outlet></router-outlet>
            </div>
    `
})
export class MyApp {

    constructor(private router:Router) {
        this.navigateHome()
    }
    
    navigateHome() {
        this.router.navigate('/home')
    }

}