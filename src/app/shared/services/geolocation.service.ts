import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Observer} from "rxjs/Observer";

export interface Geoposition {
  coords: Coordinates;
  timestamp: number;
}

Injectable();
export class GeolocationService {
  constructor() {}

  supportsGeolocation(): boolean {
    return navigator && ( navigator.geolocation !== undefined );
  }

  getCurrentPosition(): Observable<Geoposition> {
    if (this.supportsGeolocation() === false) return;

    return new Observable((observer: Observer<Geoposition>)=> {
      navigator.geolocation.getCurrentPosition((position: Geoposition) => {
        observer.next(position);
        observer.complete();
      },
        (error)=>{
          observer.error(error);
        })
    });
  }
}
