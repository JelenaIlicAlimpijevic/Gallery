import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {

  public isAuthenticated: boolean;

  constructor(private http: HttpClient) {
  	this.isAuthenticated = !!window.localStorage.getItem('loginToken');
  }

  login(email: string, password: string)
  {
  	return new Observable((o: Observer<any>) => {
    	this.http.post('http://localhost:8000/api/login', {
  			'email': email,
  			'password': password
  	  	})
	        .subscribe(
	          (data: {token: string}) => {
	          	window.localStorage.setItem('loginToken', data.token);
	          	this.isAuthenticated = true;

	            o.next(data.token);
	            return o.complete();
	          },
	          (err) => {
	          	
	          	return o.error(err);
	          }
	        );
    });
  }

  register(first_name:string, last_name:string, email: string, password: string)
  {
    return new Observable((o: Observer<any>) => {
      this.http.post('http://localhost:8000/api/register', {
        'first_name':first_name,
        'last_name':last_name,
        'email': email,
        'password': password
        })
          .subscribe(
            (data: {token: string}) => {
              window.localStorage.setItem('loginToken', data.token);
              this.isAuthenticated = true;

              o.next(data.token);
              return o.complete();
            },
            (err) => {
              
              return o.error(err);
            }
          );
    });
  }

  public getRequestHeaders()
  {
  	return new HttpHeaders().set('Authorization', 'Bearer ' + window.localStorage.getItem('loginToken'));
  }

  public logout()
  {
  	window.localStorage.removeItem('loginToken');
  	this.isAuthenticated = false;	
  }

}
