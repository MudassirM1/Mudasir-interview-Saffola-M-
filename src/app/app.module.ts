import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {enableProdMode} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ClassicMasalaComponent } from './classic-masala/classic-masala.component';
import { DeliciousHealthyComponent } from './delicious-healthy/delicious-healthy.component';
import { EasyToCookComponent } from './easy-to-cook/easy-to-cook.component';
import { SteamingYummyComponent } from './steaming-yummy/steaming-yummy.component';
import { FoodieComponent } from './foodie/foodie.component';
import { FollowUsComponent } from './follow-us/follow-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ClassicMasalaComponent,
    DeliciousHealthyComponent,
    EasyToCookComponent,
    SteamingYummyComponent,
    FoodieComponent,
    FollowUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
enableProdMode();
