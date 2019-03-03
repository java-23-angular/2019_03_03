import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class HttpProvider {
  private static BASE_URL: string = 'https://contacts-telran.herokuapp.com';
  constructor(private httpClient: HttpClient){

  }

  public registration(email: string, password: string):Observable<Token>{
    let body = {
      email: email,
      password: password
    };

    return this.httpClient.post<Token>(HttpProvider.BASE_URL + '/api/registration', body,{
      headers: new HttpHeaders({
        'Authorization':'token here'
      })
    });
  }
}

type Token = {
  token:string
}

