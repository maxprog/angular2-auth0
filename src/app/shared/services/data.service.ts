import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ITodo } from '../interfaces';
import { Auth } from './auth.service';
import { ConfigService } from '../utils/config.service';

@Injectable()
export class DataService {

    _baseUrl: string = '';
      headers = {};

    constructor(private http: Http,
        private configService: ConfigService,
        private auth:Auth) {
        this._baseUrl = configService.getApiURI();

  
    }

 setHeaders(){
         let headers = new Headers();
     
         headers.append('Content-Type', 'application/json');
         headers.append('Access-Control-Allow-Origin','*');
         let token = `Bearer ${this.auth.getToken()}`;
         headers.append('Authorization', token);
          return headers;
   }


    getTodos() {
        return this.http.get(this._baseUrl + 'todos',{headers : this.setHeaders()})
            .map((res: Response) => {
                 return res.json();
            })
            .catch(this.handleError);
    }

   
  


    createTodo(todo: ITodo) {

        return this.http.post(this._baseUrl + 'todos/', JSON.stringify(todo), {headers : this.setHeaders()})
            .map((res: Response) => {
               return res.json();
            })
            .catch(this.handleError);
    }

    updateTodo(todo: ITodo) {

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.put(this._baseUrl + 'todos/' + todo.id, JSON.stringify(todo), {headers : this.setHeaders()})
            .map((res: Response) => {
                 return res.json();
            })
            .catch(this.handleError);
    }

    deleteTodo(id: number){
        return this.http.delete(this._baseUrl + 'todos/' + id, {headers : this.setHeaders()})
            .map((res: Response) => {
                 return res.json();
            })
            .catch(this.handleError);
    }
   

  

    private handleError(error: any) {
        var applicationError = error.headers.get('Application-Error');
        var serverError = error.json();
        var modelStateErrors: string = '';

        if (!serverError.type) {
            console.log(serverError);
            for (var key in serverError) {
                if (serverError[key])
                    modelStateErrors += serverError[key] + '\n';
            }
        }

        modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;

        return Observable.throw(applicationError || modelStateErrors || 'Server error');
    }
}