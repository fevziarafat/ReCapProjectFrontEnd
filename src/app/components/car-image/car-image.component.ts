import { Component, OnInit } from '@angular/core';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-image',
  templateUrl: './car-image.component.html',
  styleUrls: ['./car-image.component.css'],
})
export class CarImageComponent implements OnInit {
  constructor(
    private carImageService: CarImageService,
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}
  carImages: CarImage[] = [];
  imageUrl: string;
  imageAddress: any;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params.id){
        this.getCarImagesById(params.id);
      }
      else{
        this.getCarImage();
      }
    });

  }
  // tslint:disable-next-line:typedef
  getbypassSecurityTrustUrl(image: CarImage) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(image.imagePath);
  }
  // tslint:disable-next-line:typedef
  getCarImage() {
    this.carImageService.getCarImage().subscribe((response) => {
      this.carImages = response.data;
    });
  }
  // tslint:disable-next-line:typedef
  adres() {
    return (this.imageAddress = this.sanitizer.bypassSecurityTrustResourceUrl(
      'http://127.0.0.1:8887/mustafa karagüllü.png'
    ));
  }
  // tslint:disable-next-line:typedef
  getCarImagesById(id: number) {
    this.carImageService.getCarImagesById(id).subscribe((response) => {
      this.carImages = response.data;
    });
  }

  // tslint:disable-next-line:typedef
  // getCarImageUrl() {
  //   this.carImageService.getCarImageUrl().subscribe((response) => {
  //     //this.imageUrl = response.data[].imagePath;
  //   });
  // }
}
