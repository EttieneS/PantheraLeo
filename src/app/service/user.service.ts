import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Leave } from '../models/leave';

import { Injectable } from '@angular/core';

const baseURL = "http://localhost:5103/api/user/";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user: User;

  constructor(private http: HttpClient) { }

  // var requestOptions: Object = {
  //   //If your response is text not json
  //   responseType: 'text'
  // }

  GetByName(user: User): any {
      return this.http.post<User>(baseURL + 'getbyname', user).subscribe(response => {
        this.user = response;
        console.log("name in service " + this.user.leave);
        return this.user;
      });
  }

  // GetByName(user: User): any {
  //   return this.http.post<any>(baseURL, user, requestOptions).pipe(map((user ,error) => {
  //     if(data){
  //       return data;
  //     }
  //     else{
  //       return error;
  //     }
  //   }));
  // }
}
