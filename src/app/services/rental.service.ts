import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreditCart } from '../models/creditCart';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { RentalDetail } from '../models/rentalDetail';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiUrl = 'https://localhost:44356/api/';
  constructor(private httpClient: HttpClient) {}
  getRentalDetail(): Observable<ListResponseModel<RentalDetail>> {
    const newPath = this.apiUrl + 'rentals/getdetails';
    return this.httpClient.get<ListResponseModel<RentalDetail>>(newPath);
  }
  // tslint:disable-next-line:typedef
  rentACar(rental: Rental): Observable<ResponseModel> {
    const newPath = this.apiUrl + 'rentals/add';

    return this.httpClient.post<ResponseModel>(newPath, rental);
  }
  submitPayment(creditCart: CreditCart): Observable<ResponseModel> {
    const newPath = this.apiUrl + 'creditcarts/payment';
    return this.httpClient.post<ResponseModel>(newPath, creditCart);
  }
}
