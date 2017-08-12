import {Component, OnInit, OnDestroy} from '@angular/core';
import {MenuService} from "../shared/services/menu.service";
import {Subscription, Subject} from "rxjs";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit, OnDestroy {
  private skata$ = new Subject();
  menuState;
  subscription: Subscription;

  constructor(private menuService: MenuService) {

  }

  ngOnInit(): void {
    this.subscription = this.menuService.getMenuState().subscribe(
      (data) => {
        this.menuState = data;
      },
      (e) => { console.log(e); },
      () => {console.log('completed');
      });
  }

  toggleMenu(): void {
    this.menuService.toggleMenu();
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
