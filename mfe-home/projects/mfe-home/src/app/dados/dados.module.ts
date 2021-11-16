import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { DadosRoutingModule } from './dados-routing.module';
import { DadosComponent } from './dados.component';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [DadosComponent],
  imports: [
    BrowserModule,
    DadosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false
    })
  ],
  providers: [],
})
export class DadosModule {}
