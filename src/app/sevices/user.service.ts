import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../Constant/constant';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  loggedUserId: string = '';

  constructor(private http: HttpClient) {
    const loggedData = localStorage.getItem('studentId');
    if (loggedData != null) {
      this.loggedUserId = loggedData;
    }
  }

  onUserLogin(obj: any) {
    console.log('Sending login request to server with:', obj); // ✅
    return this.http.post(Constant.API_URL + 'login', obj);
  }
}
