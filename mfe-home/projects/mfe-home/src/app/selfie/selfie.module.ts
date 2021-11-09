import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { SelfieRoutingModule } from './selfie-routing.module';
import { SelfieComponent } from './selfie.component';

@NgModule({
  declarations: [SelfieComponent],
  imports: [BrowserModule, SelfieRoutingModule, MatToolbarModule],
  providers: [],
})
export class SelfieModule {}
