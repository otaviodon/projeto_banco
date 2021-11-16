import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CadastroService } from './cadastro.service';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NgxMaskModule} from 'ngx-mask'

@NgModule({
  declarations: [HomeComponent],
  imports: [
    BrowserModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: true
    })
  ],
  providers: [CadastroService],
})
export class HomeModule {}
