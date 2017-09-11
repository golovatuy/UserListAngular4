import { Component, OnInit } from '@angular/core';
import { UserService } from './../shared/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(
    private _userService: UserService
  ) { }

  userList: Array<any>;

  ngOnInit() {
    this._userService.getUsers().subscribe(
      data => {
        this.userList = data;
        console.log(this.userList);
      }
    );
  }
}
