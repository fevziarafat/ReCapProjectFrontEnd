import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  colors: Color[] = [];
  dataLoaded = false;
  filterText = '';
  currentColor: Color;
  constructor(private colorService: ColorService) {}
  ngOnInit(): void {
    this.getColors();
  }
  // tslint:disable-next-line:typedef
  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
      this.dataLoaded = true;
    });
  }
  // tslint:disable-next-line:typedef
  setCurrentColor(color: Color) {
    this.currentColor = color;
  }
  // tslint:disable-next-line:typedef
  getCurrentColorClass(color: Color) {
    if (color === this.currentColor) {
      return 'list-group-item  active';
    } else {
      return 'list-group-item ';
    }
  }
  // tslint:disable-next-line:typedef
  getAllCarClass() {
    if (!this.currentColor) {
      return 'list-group-item  active';
    } else {
      return 'list-group-item ';
    }
  }
  // tslint:disable-next-line:typedef
  clearCurrentColor() {
    if (this.currentColor != null) {
      return 'list-group-item ';
    } else {
      return 'list-group-item  active';
    }
  }
}
