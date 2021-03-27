import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = [
  { path: '', component: CarComponent },
  { path: 'cars', component: CarComponent },
  { path: 'cars/GetCarsByBrandId/:brandId', component: CarComponent },
  { path: 'cars/GetCarsByColorId/:colorId', component: CarComponent },
  { path: 'cars/GetCarById/:id', component: CarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
