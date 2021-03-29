import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/carDetail';

import { CarList } from '../models/carList';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44312/api/';

  constructor(private httpClient: HttpClient) {}


  getCarList(): Observable<ListResponseModel<CarList>> {
    const newPath = this.apiUrl + 'cars/GetCarList';
    return this.httpClient.get<ListResponseModel<CarList>>(newPath);
  }
  getCarListWithBrand(brandId: number): Observable<ListResponseModel<CarList>> {
    const newPath = this.apiUrl + 'cars/GetCarListWithBrand?brandId=' + brandId;
    return this.httpClient.get<ListResponseModel<CarList>>(newPath);
  }
  getCarListWithColor(colorId: number): Observable<ListResponseModel<CarList>> {
    const newPath = this.apiUrl + 'cars/GetCarListWithColor?colorId=' + colorId;
    return this.httpClient.get<ListResponseModel<CarList>>(newPath);
  }
  getCarListWithImage(carId: number): Observable<ListResponseModel<CarList>> {
    const newPath = this.apiUrl + 'cars/GetCarDetailsWithImage?Id=' + carId;
    return this.httpClient.get<ListResponseModel<CarList>>(newPath);
  }
}
