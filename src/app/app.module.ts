import './rxjs-operators';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { PaginationModule } from 'ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap';
import { AppComponent }   from './app.component';
import { HomeComponent } from './home/home.component';
import { InformationComponent } from './information/information.component';
import { TodoListComponent } from './todo/todo-list.component';
import { routing } from './app.routes';
import { DataService } from './shared/services/data.service';
import { ConfigService } from './shared/utils/config.service';
import {Auth} from './shared/services/auth.service';
import {AuthGuard} from './auth.guard';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
      
        routing
      
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        InformationComponent,
        TodoListComponent
    ],
    providers: [
        ConfigService,
        DataService,
        Auth,
        AuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
