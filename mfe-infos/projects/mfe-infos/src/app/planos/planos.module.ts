import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PlanosRoutingModule } from './planos-routing.module';
import { PlanosComponent } from './planos.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
       PlanosComponent

    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        PlanosRoutingModule,
        MatToolbarModule
    ],
    providers: []
})
export class PlanosModule { }
