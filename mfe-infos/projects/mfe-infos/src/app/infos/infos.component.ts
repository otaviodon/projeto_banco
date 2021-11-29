import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Client } from './client.model.';
import { InformationService } from './information.service';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.scss']
})
export class InfosComponent implements OnInit {
  cpf: string = '';
  dadosCliente!: Client;

  constructor(
    private informationService: InformationService,
    private route: ActivatedRoute,
    private router: Router
  ) {
   /*  this.route.queryParams.subscribe((queryParams: Params) => {
      this.cpf = queryParams['cpf'];
    }); */

    this.cpf = localStorage['cpfUser']
    this.getDados();
  }

  ngOnInit(): void {}

  getDados() {
    this.informationService.getDadosCliente(this.cpf).subscribe((dados) => {
      const todosOsdados: any = dados;
      this.dadosCliente = todosOsdados.cliente;
    });
  }

  goBackPage() {
    this.router.navigate(['dados'], {
      queryParams: { cpf: this.cpf, userData: true },
    });
  }

}
