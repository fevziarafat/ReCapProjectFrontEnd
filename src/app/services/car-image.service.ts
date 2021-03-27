import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarImageService {
  constructor(private httpClient: HttpClient) {}

  apiUrl = 'https://localhost:44312/api/';
  getCarImage(): Observable<ListResponseModel<CarImage>> {
    const newPath = this.apiUrl + 'carimages/getall';
    return (this.httpClient.get<ListResponseModel<CarImage>>(
      newPath
    ));
  }
  getCarImageUrl(): Observable<ListResponseModel<CarImage>> {
    const newPath = this.apiUrl + 'carimages/getall';
    return (this.httpClient.get<ListResponseModel<CarImage>>(
      newPath
    ));
  }
  getCarsById(id: number): Observable<ListResponseModel<CarImage>> {
    const newPath = this.apiUrl + 'cars/GetCarsById?id=' + id;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
}
