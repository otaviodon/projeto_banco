import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InformationService {
  constructor(private httpClient: HttpClient) {}

  getDadosCliente(cpf: string) {
    return this.httpClient.post(
      'http://bancoapi-env.eba-ra7jpuyh.us-east-2.elasticbeanstalk.com/api/Clientes/buscarDados',
      {
        cpf,
      }
    );
  }
}
