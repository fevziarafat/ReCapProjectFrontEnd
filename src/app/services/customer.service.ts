import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  apiUrl = 'https://localhost:44356/api/';
  constructor(private httpClient: HttpClient) {}
  getCustomers(): Observable<ListResponseModel<Customer>> {
    const newPath = this.apiUrl + 'customers/GetAll';
    return this.httpClient.get<ListResponseModel<Customer>>(newPath);
  }
}
