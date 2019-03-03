import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpProvider} from '../http.provider';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {
  email: string ='';
  password: string = '';
  subscription = null;
  constructor(private httpProvider: HttpProvider) { }

  ngOnInit() {
  }

  onRegistration():void{
    this.subscription = this.httpProvider.registration(this.email,this.password)
      .pipe(catchError(err => {
        console.log(err);
        return throwError(err.error.message);
      }))
      .subscribe(
        value => console.log(value),
        error => {
          console.log(error);
          }
        );
  }

  ngOnDestroy(): void {
    if(this.subscription!=null){
      this.subscription.unsubscribe();
    }
  }
}
