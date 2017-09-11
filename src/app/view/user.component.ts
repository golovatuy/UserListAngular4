import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from './../shared/user.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: any;

  constructor(
    private _route: ActivatedRoute,
    private _userService: UserService
  ) { }

  ngOnInit() {
    this._route.paramMap
      .switchMap((params: ParamMap) => this._userService.getUser(params.get('id')))
      .subscribe(user => this.user = user);
  }
}
