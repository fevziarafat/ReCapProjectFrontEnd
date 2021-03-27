import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  brands: Brand[] = [];
  sayi: any = [];
  currentCar: Car;

  dataLoaded = false;

  constructor(
    private carService: CarService,
    private brandService: BrandService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params.brandId) {
        this.getCarsByBrand(params.brandId);
      } else if (params.colorId) {
        this.getCarsByColor(params.colorId);
      } else if (params.id) {
        this.getCarById(params.id);
      } else {
        this.getCars();
      }
    });
  }

  // tslint:disable-next-line:typedef
  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
    });
  }
  // tslint:disable-next-line:typedef
  getCarsByBrand(Id: number) {
    this.carService.getCarsByBrand(Id).subscribe((response) => {
      this.cars = response.data;
    });
  }
  // tslint:disable-next-line:typedef
  getCarById(id: number) {
    this.carService.getCarById(id).subscribe((response) => {
      this.cars = response.data;
      console.log(id);
    });
  }
  // tslint:disable-next-line:typedef
  // setCurrentCar(car: Car) {
  //   this.currentCar = car.Id;
  // }

  // tslint:disable-next-line:typedef
  // getBrands() {
  //   this.brandService.getBrands().subscribe((response) => {
  //     this.brands = response.data;
  //   });
  // }

  // tslint:disable-next-line:typedef
  getCarsByColor(Id: number) {
    this.carService.getCarsByColor(Id).subscribe((response) => {
      this.cars = response.data;
    });
  }
}
