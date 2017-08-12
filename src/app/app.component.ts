import {Component, OnDestroy, OnInit} from '@angular/core';
import {GeolocationService, Geoposition} from "./shared/services/geolocation.service";
import {Observable, Subscription} from "rxjs";
import {MenuService} from "./shared/services/menu.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GeolocationService]
})

export class AppComponent implements OnInit {
  title = 'Hot Dashboard! <3';
  behObj: Observable<boolean>;
  menuState: boolean;

  constructor(private geolocationService: GeolocationService, private menuService: MenuService){}

  ngOnInit(): void {
    this.menuService.getMenuState().subscribe(
      (data) => {
        this.menuState = data;
      },
      (e) => { console.log(e); },
      () => {console.log('completed');}
    )
  }
}
