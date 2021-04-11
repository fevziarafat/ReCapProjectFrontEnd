import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-admin',
  templateUrl: './car-admin.component.html',
  styleUrls: ['./car-admin.component.css'],
})
export class CarAdminComponent implements OnInit {
  constructor(
    private carService: CarService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder
  ) {}

  selectedCar: Car;
  carToUpdated: Car;
  allCars: Car[];
  selectedCarDataLoaded = false;
  // tslint:disable-next-line:no-inferrable-types
  selectionforAdd: boolean = true;
  // tslint:disable-next-line:no-inferrable-types
  selectionForEdit: boolean = false;
  // tslint:disable-next-line:no-inferrable-types
  imageUrl: string = 'https://localhost:44398/CarImages/';

  carUpdateForm: FormGroup;
  carAddForm: FormGroup;

  // tslint:disable-next-line:typedef
  selectionAdd(selection: boolean) {
    this.selectionforAdd = selection;
    this.selectionForEdit = false;
    this.selectedCarResetter(false);
  }
  // tslint:disable-next-line:typedef
  selectionEdit(selection: boolean) {
    this.selectionforAdd = false;
    this.selectionForEdit = selection;
  }

  ngOnInit(): void {
    this.getAllCarsDto();
    this.createCarUpdateForm();
    this.createCarAddForm();
  }

  // tslint:disable-next-line:typedef
  createCarUpdateForm() {
    this.carUpdateForm = this.formBuilder.group({
      brandId: ['', Validators.required],
      colorId: ['', Validators.required],
      carName: ['', Validators.required],
      modelYear: ['', [Validators.required]],
      dailyPrice: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  // tslint:disable-next-line:typedef
  createCarAddForm() {
    this.carAddForm = this.formBuilder.group({
      brandId: ['', Validators.required],
      colorId: ['', Validators.required],
      carName: ['', Validators.required],
      modelYear: ['', [Validators.required, Validators.min(1500)]],
      dailyPrice: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  // tslint:disable-next-line:typedef
  deleteCar(id: number) {
    let carToDelete: Car;
    this.carService.getCarByCarId(id).subscribe(
      (response) => {
        carToDelete = response.data;
        this.carService.deleteCar(carToDelete).subscribe(
          // tslint:disable-next-line:no-shadowed-variable
          (response) => {
            this.toastrService.success(response.message, 'Silindi');
          },
          (responseError) => {
            this.toastrService.error(responseError.message);
          }
        );
      },
      (responseError) => {
        this.toastrService.error('Belirtilen araca ulaşılamadı', 'Hata');
      }
    );
  }

  // tslint:disable-next-line:typedef
  addCar() {
    if (this.carAddForm.valid) {
      const carModel = Object.assign({}, this.carAddForm.value);
      this.carService.add(carModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Başarılı');
          this.carUpdateForm.reset();
        },
        (responseError) => {
          if (responseError.error.ValidationErrors.length > 0) {
            // tslint:disable-next-line:prefer-for-of
            for (
              let i = 0;
              i < responseError.error.ValidationErrors.length;
              i++
            ) {
              this.toastrService.error(
                responseError.error.ValidationErrors[i].ErrorMessage,
                'Doğrulama hatası'
              );
            }
          }
        }
      );
    } else {
      this.toastrService.error(
        'Giriş yaptığınız bilgileri kontrol ediniz.',
        'Dikkat'
      );
    }
  }

  // tslint:disable-next-line:typedef
  updateCar(carId: number) {
    this.getSelectedCar(carId);
    if (this.carUpdateForm.valid) {
      const carModelToUpdate = Object.assign({}, this.carUpdateForm.value);
      carModelToUpdate.id = this.selectedCar.id;
      this.carService.updateCar(carModelToUpdate).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Başarılı');
          this.selectedCarResetter(false);
          this.carUpdateForm.reset();
        },
        (responseError) => {
          if (responseError.error.ValidationErrors.length > 0) {
            // tslint:disable-next-line:prefer-for-of
            for (
              let i = 0;
              i < responseError.error.ValidationErrors.length;
              i++
            ) {
              this.toastrService.error(
                responseError.error.ValidationErrors[i].ErrorMessage,
                'Doğrulama hatası'
              );
            }
          }
        }
      );
    } else {
      this.toastrService.error(
        'Giriş yaptığınız bilgileri kontrol ediniz.',
        'Dikkat'
      );
    }
  }
  // tslint:disable-next-line:typedef
  getSelectedCar(carId: number) {
    this.carService.getCarByCarId(carId).subscribe((response) => {
      this.selectedCar = response.data;
      this.selectedCarDataLoaded = true;
      //console.log(this.selectedCar)
    });
  }
  // tslint:disable-next-line:typedef
  selectedCarResetter(newValue: boolean) {
    this.selectedCarDataLoaded = newValue;
  }

  // tslint:disable-next-line:typedef
  getAllCarsDto() {
    this.carService.getAllCars().subscribe((response) => {
      this.allCars = response.data;
    });
  }
}
