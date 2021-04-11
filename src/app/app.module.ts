import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  DlDateTimeDateModule,
  DlDateTimePickerModule,
} from 'angular-bootstrap-datetimepicker';
import { ToastrModule } from 'ngx-toastr';

import { DpDatePickerModule } from 'ng2-date-picker';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { NaviComponent } from './components/navi/navi.component';
import { CarImageComponent } from './components/car-image/car-image.component';
import { CarDetailsWithImageComponent } from './components/car-details-with-image/car-details-with-image.component';
import { VarAddedPipe } from './pipes/var-added.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { FilterPipeBrandsPipe } from './pipes/filter-pipe-brands.pipe';
import { FilterPipeColorsPipe } from './pipes/filter-pipe-colors.pipe';
import { FilterPipeBrandDropdownPipe } from './pipes/filter-pipe-brand-dropdown.pipe';
import { FilterPipeColorDropdownPipe } from './pipes/filter-pipe-color-dropdown.pipe';

import { MatButtonModule } from '@angular/material/button';

import { A11yModule } from '@angular/cdk/a11y';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';

import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';

import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { OverlayModule } from '@angular/cdk/overlay';
import { DateComponentComponent } from './components/date-component/date-component.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { AComponent } from './components/a/a.component';
import { CarsComponent } from './components/cars/cars.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { CarAdminComponent } from './components/car-admin/car-admin.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    CarComponent,
    ColorComponent,
    CustomerComponent,
    RentalComponent,
    NaviComponent,
    CarImageComponent,
    CarDetailsWithImageComponent,
    VarAddedPipe,
    FilterPipePipe,
    FilterPipeBrandsPipe,
    FilterPipeColorsPipe,
    FilterPipeBrandDropdownPipe,
    FilterPipeColorDropdownPipe,
    DateComponentComponent,
    BrandAddComponent,
    ColorAddComponent,
    CarAddComponent,
    AComponent,
    CarsComponent,
    CarUpdateComponent,
    CarAdminComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DpDatePickerModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    DlDateTimeDateModule, // <--- Determines the data type of the model
    DlDateTimePickerModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),

    A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    PortalModule,
    ScrollingModule,
  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
