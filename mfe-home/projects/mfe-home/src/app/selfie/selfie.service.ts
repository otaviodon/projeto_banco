import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SelfieService {
  constructor(private httpClient: HttpClient) {}

  uploadImage(formData: FormData) {
    return this.httpClient.post(
      'http://bancoapi-env.eba-ra7jpuyh.us-east-2.elasticbeanstalk.com/api/uploadImage',
      formData
    );
  }

  alterarSelfie(cpf: string, urlImagem: string) {
    return this.httpClient.post(
      'http://bancoapi-env.eba-ra7jpuyh.us-east-2.elasticbeanstalk.com/api/Clientes/alterarImagem',
      {
        cpf: cpf,
        urlImagem: urlImagem,
      }
    );
  }
}
