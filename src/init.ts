/// <reference path="../typings/tsd.d.ts" />

import {bootstrap, bind} from 'angular2/angular2'
import {routerInjectables, HashLocationStrategy, Location, LocationStrategy} from 'angular2/router';

import {MyApp} from './app/app';

let hashLocationInjectable = bind(LocationStrategy).toClass(HashLocationStrategy);

let injectables = [
    routerInjectables,
    hashLocationInjectable
]

bootstrap(MyApp, [
    injectables
]);