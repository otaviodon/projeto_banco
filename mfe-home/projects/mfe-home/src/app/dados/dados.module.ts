import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DadosRoutingModule } from './dados-routing.module';
import { DadosComponent } from './dados.component';

@NgModule({
  declarations: [DadosComponent],
  imports: [BrowserModule, DadosRoutingModule],
  providers: [],
})
export class DadosModule {}
