import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.scss']
})
export class InfosComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.reaproveitamentoDeDados();
  }



  reaproveitamentoDeDados() {

    let body = {
      "cpf": "11111111111"
    }

    let host = 'http://bancoapi-env.eba-ra7jpuyh.us-east-2.elasticbeanstalk.com/api/ReaproveitaDados/buscarCPF';

    this.http.post<any>(host, body).subscribe(info => {

      console.log(info);
      return info;
    },
      (err) => {
        console.log("Erro ao chamar a API");

      }


    );

  }



  chamaApi() {


  }


}
