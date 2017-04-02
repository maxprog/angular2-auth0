import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
    
    apiUrl : string;

    constructor() {
        this.apiUrl = 'http://localhost:8000/api/';
     }

     getApiURI() {
         return this.apiUrl;
     }

     getApiHost() {
         return this.apiUrl.replace('api/','');
     }
}