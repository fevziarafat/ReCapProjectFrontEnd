import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailsWithImageComponent } from './components/car-details-with-image/car-details-with-image.component';
import { CarImageComponent } from './components/car-image/car-image.component';
import { CarComponent } from './components/car/car.component';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
