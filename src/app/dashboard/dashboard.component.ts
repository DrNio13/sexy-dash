import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from "../user/user";
import {Subscription} from "rxjs/Subscription";
import {Observable} from "rxjs/Observable";
import {GeolocationService, Geoposition} from "../shared/services/geolocation.service";

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit, OnDestroy {
  public users: User[];

  public subscriptionPosition: Subscription;
  public userPosition: Geoposition;
  public loadingMessage: string = 'Loading position...';
  public enableMessage: boolean = false;

  constructor(private geolocationService: GeolocationService){}

  ngOnInit() { }

  getUserPosition(): void {
    this.enableMessage = true;
    const position$: Observable<Geoposition> = this.geolocationService.getCurrentPosition();

    this.subscriptionPosition = position$.subscribe(
      (data)=>{
        this.userPosition = data;
        this.enableMessage = false;
        console.log(this.userPosition)
      },
      (e) => {
        console.log('Error while getting current location',e)
      }
    );

  }

  ngOnDestroy(): void {
    this.subscriptionPosition.unsubscribe();
  }
}
