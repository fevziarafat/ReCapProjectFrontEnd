import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { CarDetail } from 'src/app/models/carDetail';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: CarDetail[] = [];
  brands: Brand[] = [];
  dataLoaded = false;
  constructor(
    private carService: CarService,
    private brandService: BrandService
  ) {}

  ngOnInit(): void {
    this.getCars();

  }

  // tslint:disable-next-line:typedef
  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
    });
  }
  // tslint:disable-next-line:typedef
  // getBrands() {
  //   this.brandService.getBrands().subscribe((response) => {
  //     this.brands = response.data;
  //   });
  // }
}
