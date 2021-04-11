import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';

import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = 'https://localhost:44356/api/';

  constructor(private httpClient: HttpClient) {}

  // tslint:disable-next-line:typedef
  login(loginModel: LoginModel) {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(
      this.apiUrl + 'auth/login',
      loginModel
    );
  }
  // tslint:disable-next-line:typedef
  isAuthenticated() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }
}
