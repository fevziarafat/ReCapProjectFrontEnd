import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDetail } from '../models/carDetail';

import { CarList } from '../models/carList';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {

  apiUrl = 'https://localhost:44356/api/';

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
  getCarListWithBrandName(
    brandName: string
  ): Observable<ListResponseModel<CarList>> {
    const newPath =
      this.apiUrl + 'cars/GetCarListWithBrandName?brandName=' + brandName;
    return this.httpClient.get<ListResponseModel<CarList>>(newPath);
  }
  // tslint:disable-next-line:adjacent-overload-signatures
  getCarListWithColorName(
    colorName: string
  ): Observable<ListResponseModel<CarList>> {
    const newPath =
      this.apiUrl + 'cars/GetCarListWithColorName?colorName=' + colorName;
    return this.httpClient.get<ListResponseModel<CarList>>(newPath);
  }
  getCarListWithImage(carId: number): Observable<ListResponseModel<CarList>> {
    const newPath = this.apiUrl + 'cars/GetCarDetailsWithImage?Id=' + carId;
    return this.httpClient.get<ListResponseModel<CarList>>(newPath);
  }
  add(car: Car): Observable<ResponseModel> {
    const newPath = this.apiUrl + 'cars/Add';
    return this.httpClient.post<ResponseModel>(newPath, car);
  }
  getAllCars(): Observable<ListResponseModel<Car>> {
    const newPath = this.apiUrl + 'cars/getall';
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  updateCar(car: Car): Observable<ResponseModel> {
    const newPath = this.apiUrl + 'cars/update';
    return this.httpClient.post<ResponseModel>(newPath, car);
  }

  getCarByCarId(carId: number): Observable<SingleResponseModel<Car>> {
    const newPath = this.apiUrl + 'cars/GetCarById?id=' + carId;
    return this.httpClient.get<SingleResponseModel<Car>>(newPath);
  }
  // updateCar(car: Car): Observable<ResponseModel> {
  //   let newPath = this.apiUrl + 'cars/update';
  //   return this.httpClient.post<ResponseModel>(newPath, car);
  // }

  // tslint:disable-next-line:adjacent-overload-signatures
  deleteCar(car: Car): Observable<ResponseModel> {
    const newPath = this.apiUrl + 'cars/delete';
    return this.httpClient.post<ResponseModel>(newPath, car);
  }
}
