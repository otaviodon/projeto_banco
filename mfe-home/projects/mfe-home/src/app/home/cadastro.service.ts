import { UserDados } from './userDados.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
  constructor(private httpClient: HttpClient) {}

  veriryUserExists(cpf: string) {
    //console.log(cpf);
    return this.httpClient.post(
      'http://bancoapi-env.eba-ra7jpuyh.us-east-2.elasticbeanstalk.com/api/ReaproveitaDados/buscarCPF',
      { cpf }
    );
  }

  getUsers() {
    return this.httpClient.get<UserDados[]>(
      'http://bancoapi-env.eba-ra7jpuyh.us-east-2.elasticbeanstalk.com/api/ReaproveitaDados'
    );
  }
}
