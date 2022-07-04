import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegionsApiService } from './services/regions-api.service';
import { CountriesComponent } from './countries/countries.component';
import { StoreModule } from '@ngrx/store';
import { countriesReducer } from './reducers/countries.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CountryEffects } from './effects/country.effects';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [	
    AppComponent,
      CountriesComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot({ countries: countriesReducer }),
    EffectsModule.forRoot([CountryEffects])
  ],
  providers: [RegionsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
