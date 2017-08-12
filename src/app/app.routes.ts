import {Routes} from '@angular/router';
import {ChatComponent} from "./chat/chat.component";
import {DragNDrop} from "./drag-n-drop/drag-n-drop.component";
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AuthGuard} from "./shared/services/auth.guard";
import {HomeComponent} from "./home/home.component";

export const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'chat', component: ChatComponent, canActivate: [AuthGuard]},
  {path: 'drag-n-drop', component: DragNDrop, canActivate: [AuthGuard]},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: '', component: HomeComponent},

  // otherwise redirect to home
  {path: '**', redirectTo: ''},
];
