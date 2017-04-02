import {Injectable} from '@angular/core';
import {tokenNotExpired} from 'angular2-jwt';
import {options} from '../../auth.options';
import { Observable } from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer'
declare var Auth0Lock: any;

@Injectable()
export class Auth {
    // Configure Auth0
    lock = new Auth0Lock('U95gPz1qMKfoqDfP723whNzC03eJKe7k', 'jrbsystem.auth0.com', options);
   

    constructor(){
         // Add callback for lock `authenticated` event
        this.lock.on("authenticated", (authResult:any) => {
            this.lock.getProfile(authResult.idToken, function(error:any, profile:any){
                if(error){
                    throw new Error(error);
                }
                // Set Profile
                localStorage.setItem('profile', JSON.stringify(profile));
                // Set Token
                localStorage.setItem('id_token', authResult.idToken);
             
             localStorage.setItem('access_token', authResult.access_token);
              console.log('1 ',authResult.idToken);
             
              
        })
        });
    }
    
    public getToken()
    {
         let token = localStorage.getItem('id_token');

         console.log('token=',token);
      //    console.log('access_token=',localStorage.getItem('access_token'));
        
        return token;
    }

  public getNickname()
   {
        
        const profile = JSON.parse(localStorage.getItem('profile'));
    // console.log('profile=',profile);
         return (profile)? profile.nickname : null;
       
   } 
   
    public login() {
        // Call the show method to display the widget.
        this.lock.show();
    };
    
    public authenticated(){
        return tokenNotExpired();
    }
    
    public logout() {
        // Remove info from localStorage
        localStorage.removeItem('id_token');
        localStorage.removeItem('profile');
    };
}