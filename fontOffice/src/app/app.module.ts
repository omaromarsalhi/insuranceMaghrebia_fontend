import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatDialogModule } from '@angular/material/dialog';

import { CarouselModule } from 'ngx-owl-carousel-o';


import { HeaderComponent } from './header/header.component'; 
import { FooterComponent } from './footer/footer.component'; 
import { HomeComponent } from './home/home.component';
import { CustomCursorDirective } from './directives/custom-cursor.directive';
import { InsurancesComponent } from './insurance/insurances/insurances.component';
import { LifeInsurancesComponent } from './insurance/life-insurances/life-insurances.component';
import { WowDirective } from './directives/wow.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CustomCursorDirective,
    InsurancesComponent,
    LifeInsurancesComponent,
    WowDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatDialogModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
