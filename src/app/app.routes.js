"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var user_list_component_1 = require('./users/user-list.component');
var schedule_list_component_1 = require('./schedules/schedule-list.component');
var schedule_edit_component_1 = require('./schedules/schedule-edit.component');
var auth_guard_1 = require('./auth.guard');
var appRoutes = [
    { path: 'users', component: user_list_component_1.UserListComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'schedules', component: schedule_list_component_1.ScheduleListComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'schedules/:id/edit', component: schedule_edit_component_1.ScheduleEditComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: '', component: home_component_1.HomeComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map