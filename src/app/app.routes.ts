import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TodoListComponent } from './todo/todo-list.component';
import { InformationComponent } from './information/information.component';

import {AuthGuard} from './auth.guard';

const appRoutes: Routes = [
    { path: 'todo-list', component: TodoListComponent, canActivate: [AuthGuard] },
    { path: 'information', component: InformationComponent, canActivate: [AuthGuard] },
  
    { path: '', component: HomeComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);