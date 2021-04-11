import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { concat } from 'rxjs';
import { CarService } from 'src/app/services/car.service';
import { AComponent } from 'src/app/components/a/a.component';
import { BrandService } from 'src/app/services/brand.service';
import { ColorService } from 'src/app/services/color.service';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css'],
})
export class CarAddComponent implements OnInit {
  addCarForm: FormGroup;
  brands: Brand[] = [];
  colors: Color[] = [];
  brandSelect: string;
  colorSelect: string;
  constructor(
    private formBuilder: FormBuilder,
    private carService: CarService,
    private toastrService: ToastrService,
    private brandService: BrandService,
    private colorService: ColorService
  ) {}

  ngOnInit(): void {
    this.createCarAddForm();
    this.getBrands();
    this.getColors();
  }
  // tslint:disable-next-line:typedef
  createCarAddForm() {
    this.addCarForm = this.formBuilder.group({
      carName: ['', Validators.required],
      description: ['', Validators.required],
      dailyPrice: ['', Validators.required],
      modelYear: ['', Validators.required],
      brandId: ['', Validators.required],
      colorId: ['', Validators.required],
    });
  }
  // tslint:disable-next-line:typedef
  add() {
    if (this.addCarForm.valid) {
      // Car model için object oluşturup tüm alanları carModel e atamak adına Object.assign kullanırız
      const carModel = Object.assign({}, this.addCarForm.value);
      this.carService.add(carModel).subscribe((response) => {
        this.toastrService.success(response.message, 'başarılı');
      });
    } else {
      this.toastrService.error('Formunuz eksik', 'Dikkat');
    }
  }

  // tslint:disable-next-line:typedef
  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }
  // tslint:disable-next-line:typedef
  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }
}
