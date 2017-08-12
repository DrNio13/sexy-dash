import {Injectable} from "@angular/core";
import {Http, RequestOptions, Headers} from "@angular/http";
import {AuthenticationService} from "../shared/services/authentication.service";
import {Observable} from "rxjs/Observable";
import {User} from "./user";

@Injectable()
export class UserService {
  private baseUrl: string = `//localhost:3000`;
  private url: string = '/api/users';

  constructor(private http: Http, private authenticationService: AuthenticationService) {
  }

  getAllUsers(): Observable<User[]> {
    const headers = new Headers({ 'Authorization': `Bearer ${this.authenticationService.token}`});
    const options = new RequestOptions({headers: headers});

    return this.http.get(this.url, options)
      .map((response) => {
        return response.json()
      });
  }

  getUserById(id: string) {

  }

  createUser(username: string, password: string): Observable<User> {
    const body = JSON.stringify({username: username, password: password});

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`${this.baseUrl}${this.url}`, body, options)
      .map((res)=>{
        return res.json();
      })
      .map((res)=>{
        return res;
      })
  }

  deleteUser() {

  }

  updateUser() {

  }
}
