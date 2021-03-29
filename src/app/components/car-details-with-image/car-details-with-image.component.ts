import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarList } from 'src/app/models/carList';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-details-with-image',
  templateUrl: './car-details-with-image.component.html',
  styleUrls: ['./car-details-with-image.component.css'],
})
export class CarDetailsWithImageComponent implements OnInit {
  carDetail: CarDetail[] = [];
  carList: CarList[] = [];
  imageLinks: string;
  currentClass: string;
  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.setCurrentClass('active');
    this.activatedRoute.params.subscribe((response) => {
      if (response.id) {
        this.getCarListWithImage(response.id);
      }
    });
  }
  // tslint:disable-next-line:typedef
  getCarListWithImage(Id: number) {
    this.carService.getCarListWithImage(Id).subscribe((response) => {
      this.carList = response.data;
      // response.data.forEach((a) => {
      //   this.imageLinks = a.ImagePath;
      // });
    });
  }
  // tslint:disable-next-line:typedef
  setCurrentClass(sinif: string) {
    this.currentClass = sinif;
  }
  // tslint:disable-next-line:typedef
  getCurrentClass(sinif: string) {
    if (this.currentClass !== sinif) {
      return 'carousel-item active';
    } else {
      return 'carousel-item';
    }
  }
}
