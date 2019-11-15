import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { Ng5SliderModule }  from 'ng5-slider';

import { AppComponent }     from './components/app/app.component';
import { HeaderComponent }  from './components/app/header/header.component';
import { FooterComponent }  from './components/app/footer/footer.component';
import { HomeComponent }    from './components/pages/home/home.component';

import { AppRoutingModule } from './modules/app_routing/app_routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
    Ng5SliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
