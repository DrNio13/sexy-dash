import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable()
export class MenuService {

  private _isMenuStateStore = new BehaviorSubject<boolean>(false);
  public readonly isMenuOpen = this._isMenuStateStore.asObservable();

  toggleMenu(): void {
    this._isMenuStateStore.next(!this._isMenuStateStore.getValue());
  }

  getMenuState(): Observable<boolean> {
    return this.isMenuOpen;
  }
}
