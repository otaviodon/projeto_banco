import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SelfieRoutingModule } from './selfie-routing.module';
import { SelfieComponent } from './selfie.component';

@NgModule({
  declarations: [SelfieComponent],
  imports: [BrowserModule, SelfieRoutingModule],
  providers: [],
})
export class SelfieModule {}
