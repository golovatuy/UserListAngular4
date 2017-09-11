import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  private url = 'http://jsonplaceholder.typicode.com/';

  constructor(private _http: Http) { }

  getUsers() {
    return this._http.get(this.url + 'users').map(
      (res) => res.json()
    );
  }

  getUser(user_id) {
    return this._http.get(this.url + 'users/' + user_id).map(
      (res) => res.json()
    );
  }

  saveUser(user) {
    return this._http.put(this.url + 'users/' + user.id, user).map(
      (res) => console.log(res.json())
    );
  }

}
