import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdInputModule, MdCardModule, MdIconModule } from '@angular/material';


import { AppComponent } from './app.component';
import { UserService } from './shared/user.service';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './view/user.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule, ReactiveFormsModule,
    MdButtonModule, MdInputModule, MdCardModule, MdIconModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: 'list',
        component: UsersComponent
      },
      {
        path: 'view/:id',
        component: UserComponent
      },
      {
        path: 'edit/:id',
        component: EditComponent
      }
    ])
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
