import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from './../shared/user.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @Input() user: any;

  editForm: FormGroup;


  constructor(
    private _fb: FormBuilder,
    private _route: ActivatedRoute,
    private _userService: UserService
  ) {
    this.editForm = _fb.group({
      'name': [null, Validators.required],
      'email': [null, Validators.required],
      'phone': [null, Validators.required],
      'company': [null, Validators.required]
    });
  }

  ngOnInit() {
    this._route.paramMap
      .switchMap((params: ParamMap) => this._userService.getUser(params.get('id')))
      .subscribe(user => this.user = user);
  }

  saveUser(userData) {
    this._userService.saveUser(userData).subscribe(
      data => console.log(data)
    );
  }
}
