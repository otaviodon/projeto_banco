import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PlanosRoutingModule } from './planos-routing.module';
import { PlanosComponent } from './planos.component';


@NgModule({
    declarations: [
       PlanosComponent

    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        PlanosRoutingModule

    ],
    providers: []
})
export class PlanosModule { }
