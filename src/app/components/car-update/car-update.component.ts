import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css'],
})
export class CarUpdateComponent implements OnInit {
  car: Car;
  carForm: FormGroup;

  constructor(
    private carService: CarService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      if (param.car) {
        this.createCarUpdateForm();
        this.carSet(param.car);
      }

      console.log(param.car);
      this.createCarUpdateForm();
      this.carSet(param.car);
    });
  }

  // tslint:disable-next-line:typedef
  carUpdate() {
    const carObject = Object.assign({}, this.carForm.value);
    this.carService.updateCar(carObject).subscribe((response) => {});
  }
  // tslint:disable-next-line:typedef
  carSet(car: Car) {
    console.log(car.carName);
    this.carForm.setValue({
      carName: car.carName,
      brandId: car.brandId,
      colorId: car.colorId,
      modelYear: car.modelYear,
      dailyPrice: car.dailyPrice,
      description: car.description,
    });
  }

  // tslint:disable-next-line:typedef
  createCarUpdateForm() {
    this.carForm = this.formBuilder.group({
      carName: ['', Validators.required],
      brandId: ['', Validators.required],
      colorId: ['', Validators.required],
      modelYear: ['', Validators.required],
      dailyPrice: ['', Validators.required],
      description: ['', Validators.required],
    });
  }
}
