import {Component} from '@angular/core';
import {AuthenticationService} from "../shared/services/authentication.service";

@Component({
  selector: 'app-header',
  templateUrl: 'header.html',
  styleUrls: ['header.scss']
})

export class HeaderComponent {

  constructor(private authenticationService: AuthenticationService){}

  logout(): void {
    this.authenticationService.logout();
  }
}
