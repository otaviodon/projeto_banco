import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlteracaoPlano } from './alteracaoPlano.model';
@Injectable({
  providedIn: 'root',
})
export class PlanosService {
  constructor(private httpClient: HttpClient) {}

  getPlanosPorRenda(rendaMensal: string) {
    console.log(rendaMensal);
    return this.httpClient.post(
      'http://bancoapi-env.eba-ra7jpuyh.us-east-2.elasticbeanstalk.com/api/Planos/planosDisponiveis',
      {
        rendaMensal,
      }
    );
  }

  changeClientPlan(alteracaoPlano: AlteracaoPlano) {
    return this.httpClient.post(
      'http://bancoapi-env.eba-ra7jpuyh.us-east-2.elasticbeanstalk.com/api/Clientes/alterarPlano',
      alteracaoPlano
    );
  }
}
