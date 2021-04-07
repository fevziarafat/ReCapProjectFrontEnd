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
  apiUrl = 'https://localhost:5001/api/';

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
  // tslint:disable-next-line:adjacent-overload-signatures
  getCarListWithBrandName(brandName: string): Observable<ListResponseModel<CarList>> {
    const newPath = this.apiUrl + 'cars/GetCarListWithBrandName?brandName=' + brandName;
    return this.httpClient.get<ListResponseModel<CarList>>(newPath);
  }
  // tslint:disable-next-line:adjacent-overload-signatures
  getCarListWithColorName(colorName: string): Observable<ListResponseModel<CarList>> {
    const newPath = this.apiUrl + 'cars/GetCarListWithColorName?colorName=' + colorName;
    return this.httpClient.get<ListResponseModel<CarList>>(newPath);
  }
  getCarListWithImage(carId: number): Observable<ListResponseModel<CarList>> {
    const newPath = this.apiUrl + 'cars/GetCarDetailsWithImage?Id=' + carId;
    return this.httpClient.get<ListResponseModel<CarList>>(newPath);
  }
}
