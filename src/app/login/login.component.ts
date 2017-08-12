import {Component} from '@angular/core';
import {User} from '../user/user';
import {Router} from "@angular/router";
import {AuthenticationService} from "../shared/services/authentication.service";
import {UserService} from "../user/user.service";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.scss']
})

export class LoginComponent {

  public userModel = {username: '', password: ''};
  public errorMessage: string = 'wrong username/password';

  constructor(private router: Router, private authenticationService: AuthenticationService, private userService: UserService) {
  }

  ngOnInit() {

  }

  login(): void {
    this.authenticationService.login(this.userModel.username, this.userModel.password)
      .subscribe(
        (result)=>{
          if(result === true) {
            this.router.navigate(['/dashboard']);
          } else {
            this.errorMessage = 'Username or password is incorrect';
          }
        },
        (e)=>{console.log('error login', e)}
      )
  }

  register(): void {
    this.userService.createUser(this.userModel.username, this.userModel.password)
      .subscribe(
        (data)=>{console.log(data)},
        (e)=>{console.log(e)}
      )
  }
}
