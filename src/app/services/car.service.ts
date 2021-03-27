import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44312/api/';

  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<Car>> {
    const newPath = this.apiUrl + 'cars/Getall';
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsByBrand(brandId: number): Observable<ListResponseModel<Car>> {
    const newPath = this.apiUrl + 'cars/GetCarsByBrandId?id=' + brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsByColor(colorId: number): Observable<ListResponseModel<Car>> {
    const newPath = this.apiUrl + 'cars/GetCarsByBrandId?id=' + colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarById(id: number): Observable<ListResponseModel<Car>> {
    const newPath = this.apiUrl + 'cars/GetCarById?id=' + id;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
}
