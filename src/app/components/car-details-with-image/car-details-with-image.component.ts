import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarList } from 'src/app/models/carList';
import { Customer } from 'src/app/models/customer';
import { Rental } from 'src/app/models/rental';
import { RentalDetail } from 'src/app/models/rentalDetail';
import { CarService } from 'src/app/services/car.service';
import { CustomerService } from 'src/app/services/customer.service';
import { RentalService } from 'src/app/services/rental.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DatePipe } from '@angular/common';
import { Car } from 'src/app/models/car';
import { CreditCart } from 'src/app/models/creditCart';
import { ToastrService } from 'ngx-toastr';

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
  rentalDetail: RentalDetail;
  rentalDetails: RentalDetail[] = [];
  customers: Customer[] = [];
  selectedDateFinish: Date;
  selectedDateStart: Date;
  resultDate: number;
  rentACarCustomer: Customer = {
    adress: '',
    companyName: '',

    userId: 1,
  };
  rental: Rental = {
    carId: 2,
    customerId: 2,
    rentDate: new Date(2021),
    returnDate: new Date(2021),
  };
  rentACarCustomerId: number;
  rentACarCustomerNgModel: any;

  creditCart: CreditCart;
  cartName: string;
  cartNumber: string;
  cartCvv: string;
  cartExpireMonth: string;
  cartExpireYear: string;

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private rentalService: RentalService,
    private customerService: CustomerService,
    private toastrService: ToastrService
  ) {}
  ngOnInit(): void {
    if (this.selectedDateStart && this.selectedDateFinish) {
      this.diff_days(this.selectedDateStart, this.selectedDateFinish);
    }
    this.getRentalDetail();
    this.getCustomers();
    this.setCurrentClass('active');
    this.activatedRoute.params.subscribe((response) => {
      if (response.id) {
        this.getCarListWithImage(response.id);
      } else if (response.car) {
        this.rentACar(response.car);
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

  // tslint:disable-next-line:typedef-whitespace
  // tslint:disable-next-line:typedef
  rentACar(car: CarList) {
    this.rental.carId = car.carId;
    this.rental.customerId = this.rentACarCustomer.id;
    this.rental.rentDate = this.selectedDateStart;
    this.rental.returnDate = this.selectedDateFinish;
    this.rentalService.rentACar(this.rental).subscribe();
    console.log(this.rental.carId + '  this.rental.carId');
    console.log(this.rental.customerId + '  this.rental.customerId');
    console.log(this.rental.rentDate + '  this.rental.rentDate');
    console.log(this.rental.returnDate + '  this.rental.rentDate');
  }
  // tslint:disable-next-line:typedef
  getCustomers() {
    this.customerService.getCustomers().subscribe((response) => {
      this.customers = response.data;
    });
  }
  // tslint:disable-next-line:typedef
  getRentalDetail() {
    this.rentalService.getRentalDetail().subscribe((response) => {
      this.rentalDetails = response.data;
    });
  }
  // tslint:disable-next-line:typedef
  diff_days(selectedDateStart: Date, selectedDateFinish: Date) {
    if (selectedDateStart.getTime() < selectedDateFinish.getTime()) {
      let diff =
        (selectedDateFinish.getTime() - selectedDateStart.getTime()) / 1000;
      diff /= 3600;
      diff /= 24;

      this.resultDate = Math.abs(Math.round(diff));
      console.log(
        this.rentACarCustomerId + 'diff_days deki rentACarCustomerId değeridir'
      );
    } else {
    }
    this.toastrService.success("Hesaplama başarılı");
  }
  setNewUser(args: any): void {
    console.log(
      args.companyName + 'setNewUser deki customer.companyName değeridir'
    );
    console.log(args.id + 'setNewUser deki customer.id değeridir');
    console.log(
      this.rentACarCustomerId +
        'setNewUser deki rentACarCustomerNgModel değeridir'
    );
    console.log(args);
    console.log(
      args.companyName + 'setNewUser deki customer.companyName değeridir'
    );
    //this.rentACarCustomerId = customer.id;
    this.rentACarCustomer = args.target;
    console.log(this.rentACarCustomer);
  }

  // tslint:disable-next-line:typedef
  commit() {
    this.creditCart = {
      cardNumber: this.cartNumber,
      cvc: this.cartCvv,
      // tslint:disable-next-line:radix
      expireMonth: this.cartExpireMonth,
      // tslint:disable-next-line:radix
      expireYear: this.cartExpireYear,
      fullName: this.cartName,
    };
    console.log(this.creditCart);
    this.rentalService.submitPayment(this.creditCart).subscribe();
    this.toastrService.success("Ödeme başarılı");
    //   (data) => {
    //     this.toastService.success(data.message);
    //     this.router.navigate(['/']);
    //   },
    //   (err) => {
    //     console.log(err);
    //     this.toastService.error(err.error.message);
    //   }
    // );
    // console.log('commited');
  }
}
