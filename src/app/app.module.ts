// Angular modules
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

// Application components
import {AppComponent} from './app.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HeaderComponent} from './header/header';
import {SearchComponent} from "./search/search.component";
import {DragNDrop} from "./drag-n-drop/drag-n-drop.component";
import {NavComponent} from "./nav/nav.component";
import {ChatComponent} from "./chat/chat.component";
import {LoginComponent} from "./login/login.component";

// Application services
import {GeolocationService} from "./shared/services/geolocation.service";
import {MenuService} from "./shared/services/menu.service";
import {ChatService} from "./chat/chat.service";

// Application modules
import {AppRoutingModule} from "./app.routing";
import {AuthenticationService} from "./shared/services/authentication.service";
import {HomeComponent} from "./home/home.component";
import {AuthGuard} from "./shared/services/auth.guard";
import {UserService} from "./user/user.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    SearchComponent,
    DragNDrop,
    NavComponent,
    ChatComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [GeolocationService, MenuService, ChatService, AuthGuard, AuthenticationService, UserService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
