import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CadastroService } from './cadastro.service';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [BrowserModule, HomeRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [CadastroService],
})
export class HomeModule {}
