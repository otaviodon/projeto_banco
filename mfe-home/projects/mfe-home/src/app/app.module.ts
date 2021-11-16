import { HttpClientModule } from '@angular/common/http';
import { DadosModule } from './dados/dados.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { SelfieModule } from './selfie/selfie.module';
import { NgxMaskModule} from 'ngx-mask'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HomeModule,
    DadosModule,
    SelfieModule,
    HttpClientModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
