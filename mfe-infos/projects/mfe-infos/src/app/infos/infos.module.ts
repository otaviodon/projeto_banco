import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { PlanosRoutingModule } from '../planos/planos-routing.module';
import { InfosRoutingModule } from './infos-routing.module';
import { InfosComponent } from './infos.component';


@NgModule({
    declarations: [
       InfosComponent

    ],
    imports: [
        BrowserModule,
        InfosRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        PlanosRoutingModule,
        MatToolbarModule

    ],
    providers: []
})
export class InfosModule { }
