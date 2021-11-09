import { HttpClientModule } from '@angular/common/http';
import { DadosModule } from './dados/dados.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { SelfieModule } from './selfie/selfie.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HomeModule,
    DadosModule,
    SelfieModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
