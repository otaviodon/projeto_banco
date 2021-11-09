import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DadosRoutingModule } from './dados-routing.module';
import { DadosComponent } from './dados.component';

@NgModule({
  declarations: [DadosComponent],
  imports: [BrowserModule, DadosRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
})
export class DadosModule {}
