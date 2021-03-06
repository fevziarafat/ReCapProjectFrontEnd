import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';

import { CarDetail } from 'src/app/models/carDetail';
import { CarList } from 'src/app/models/carList';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  constructor(
    private carService: CarService,
    private brandService: BrandService,
    private activatedRoute: ActivatedRoute
  ) {}
  cars: CarDetail[] = [];
  brands: Brand[] = [];
  sayi: any = [];
  carList: CarList[] = [];
  filterText = '';
  listCarByColorText = '';
  listCarByBrandText = '';

  dataLoaded = false;
  class: string;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params.brandId) {
        this.getCarListWithBrand(params.brandId);
      } else if (params.colorId) {
        this.getCarListWithColor(params.colorId);
      } else if (params.brandName) {
        this.listCarByBrand(params.brandName);
      } else if (params.colorName) {
        this.listCarByColor(params.colorName);
      } else if (params.carId) {
        this.getCarListWithImage(params.carId);
      // } else if (params.getAllCars) {
      //   this.getAllCars();
      // } else {
        this.getCarList();
      }
    });
  }
  // tslint:disable-next-line:typedef
  // getAllCars() {
  //   return this.carService.getAllCars().subscribe((response) => {

  //     this.carList = response.data;
  //   });
  //   throw new Error('Method not implemented.');
  // }
  // tslint:disable-next-line:typedef
  getCarList() {
    this.carService.getCarList().subscribe((response) => {
      this.carList = response.data;
    });
  }
  // tslint:disable-next-line:typedef
  getCarListWithBrand(brandId: number) {
    this.carService.getCarListWithBrand(brandId).subscribe((response) => {
      this.carList = response.data;
    });
  }
  // tslint:disable-next-line:typedef
  getCarListWithColor(colorId: number) {
    this.carService.getCarListWithColor(colorId).subscribe((response) => {
      this.carList = response.data;
    });
  }
  // tslint:disable-next-line:typedef
  getCarListWithImage(Id: number) {
    this.carService.getCarListWithImage(Id).subscribe((response) => {
      this.carList = response.data;
    });
  }

  // tslint:disable-next-line:typedef
  listCarByColor(colorName: string) {
    colorName = colorName.trim();
    this.carService.getCarListWithColorName(colorName).subscribe((response) => {
      this.carList = response.data;
    });
  }
  // tslint:disable-next-line:typedef
  listCarByBrand(brandName: string) {
    this.carService.getCarListWithBrandName(brandName).subscribe((response) => {
      this.carList = response.data;
    });
  }
}
