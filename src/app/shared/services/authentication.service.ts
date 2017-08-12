import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Router} from "@angular/router";

@Injectable()
export class AuthenticationService {
  private prefixURL: string = '//localhost:3000';
  private url: string = '/api/authenticate';
  public token: string;

  constructor(private http: Http, private router: Router) {
    let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  login(username: string, password: string): Observable<boolean> {
    const body = JSON.stringify({username: username, password: password});

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`${this.prefixURL}${this.url}`, body, options)
      .map((res)=>{
        return res.json();
      })
      .map((res)=>{
        if (!res.token) return false;

        this.token = res.token;
        sessionStorage.setItem('currentUser',JSON.stringify({username: username, token: this.token}));
        return true;
      })
  }

  logout(): void {
    this.token = null;
    sessionStorage.clear();
    this.router.navigate(['/'])
  }
}
