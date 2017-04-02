import { Component } from '@angular/core';
import {Auth} from '../shared/services/auth.service';

@Component({
    moduleId:module.id,
    selector: 'information',
    templateUrl: 'information.component.html'
})
export class InformationComponent { 
    profile:any;
    
    constructor(private auth: Auth){
        this.profile = JSON.parse(localStorage.getItem('profile'));
        console.log(this.profile);
    }
}

