import {NgModule} from '@angular/core';
import {LoginComponent} from './login.component';
import {CommonModule} from '@angular/common';
import {LoginRouterModule} from './login.router.module';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations:[
    LoginComponent
  ],
  imports:[
    CommonModule,
    LoginRouterModule,
    FormsModule
  ]
})
export class LoginModule {

}
