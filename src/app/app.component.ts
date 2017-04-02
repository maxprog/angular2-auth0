import { Component, OnInit, ViewContainerRef } from '@angular/core';


import './rxjs-operators';
import {Auth} from './shared/services/auth.service';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html'
})
export class AppComponent{

    constructor(private auth: Auth,private viewContainerRef: ViewContainerRef) {
         
        this.viewContainerRef = viewContainerRef;
    }

  
}