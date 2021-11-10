import { DadosCadastrais } from './dados.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DadosService {
  constructor(private httpClient: HttpClient) {}

  insertClient(dados: DadosCadastrais) {
    return this.httpClient.post(
      'http://bancoapi-env.eba-ra7jpuyh.us-east-2.elasticbeanstalk.com/api/Clientes',
      dados
    );
  }

  getCliente(cpf: string) {
    return this.httpClient.post(
      'http://bancoapi-env.eba-ra7jpuyh.us-east-2.elasticbeanstalk.com/api/ReaproveitaDados/buscarCPF',
      { cpf }
    );
  }


  buscaCep(cep: string){
    return this.httpClient.get(`//viacep.com.br/ws/${cep}/json`)
  }

}
