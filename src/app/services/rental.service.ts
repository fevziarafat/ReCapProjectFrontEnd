import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { RentalDetail } from '../models/rentalDetail';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiUrl = 'https://localhost:44312/api/';
  constructor(private httpClient: HttpClient) {}
  getRentalDetail(): Observable<ListResponseModel<RentalDetail>> {
    const newPath = this.apiUrl + 'rentals/getdetails';
    return this.httpClient.get<ListResponseModel<RentalDetail>>(newPath);
  }
}
