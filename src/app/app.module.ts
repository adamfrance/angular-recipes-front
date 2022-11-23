import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import {DataViewModule} from 'primeng/dataview';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {DropdownModule} from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {RatingModule} from 'primeng/rating';
import {RippleModule} from 'primeng/ripple';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipesFilterComponent } from './recipes-filter/recipes-filter.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RecipesListComponent,
    RecipesFilterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DataViewModule,
    PanelModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    RatingModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
