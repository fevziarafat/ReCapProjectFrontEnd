import { NgModule, ViewChild } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AComponent } from './components/a/a.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarAdminComponent } from './components/car-admin/car-admin.component';
import { CarDetailsWithImageComponent } from './components/car-details-with-image/car-details-with-image.component';
import { CarImageComponent } from './components/car-image/car-image.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { CarComponent } from './components/car/car.component';
import { CarsComponent } from './components/cars/cars.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = [
  { path: '', component: CarComponent },
  { path: 'cars', component: CarComponent },
  { path: 'cars/GetCarListWithBrand/:brandId', component: CarComponent },
  { path: 'cars/GetCarListWithColor/:colorId', component: CarComponent },
  { path: 'cars/GetCarListWithBrandName/:brandName', component: CarComponent },
  { path: 'cars/GetCarListWithColorName/:colorName', component: CarComponent },
  { path: 'cars/GetCarById/:carId', component: CarComponent },
  {
    path: 'cars/GetCarDetailsWithImage/:id',
    component: CarDetailsWithImageComponent,
  },
  {
    path: 'rentals/add/:rental',
    component: RentalComponent,
  },
  {
    path: 'creditcarts/payment/:creditCart',
    component: CarDetailsWithImageComponent,
  },
  {
    path: 'brands/add',
    component: BrandAddComponent,
  },
  {
    path: 'colors/add',
    component: ColorAddComponent,
  },
  {
    path: 'cars/add',
    component: CarAddComponent,

  },
  {
    path: 'carUpdate/:car',
    component: CarUpdateComponent,

  },
  {
    path: 'carsAll',
    component: CarsComponent,

  },
  {
    path: 'carAdmin',
    component: CarAdminComponent,

  },
  {
    path: 'cars/Update/:car',
    component: CarAdminComponent,

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
