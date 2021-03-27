import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {
  brands: Brand[] = [];
  dataLoaded = false;
  filterText = '';
  currentBrand: Brand;
  constructor(private brandService: BrandService) {}

  ngOnInit(): void {
    this.getBrands();
  }

  // tslint:disable-next-line:typedef
  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
      this.dataLoaded = true;
    });
  }
  // tslint:disable-next-line:typedef
  setCurrentBrand(brand: Brand) {
    this.currentBrand = brand;
  }

  // tslint:disable-next-line:typedef
  getCurrentBrandClass(brand: Brand) {
    // tslint:disable-next-line:no-conditional-assignment
    if (brand === this.currentBrand) {
      return 'list-group-item list-group-item-action active';
    } else {
      return 'list-group-item list-group-item-action';
    }
  }
}
