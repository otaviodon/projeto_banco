import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SelfieService } from './selfie.service';

@Component({
  selector: 'app-selfie',
  templateUrl: './selfie.component.html',
  styleUrls: ['./selfie.component.scss'],
})
export class SelfieComponent implements OnInit {
  cpf: string = '';
  salarioMensal: string = '';
  urlImagem: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private selfieService: SelfieService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.cpf = queryParams['cpf'];
      this.salarioMensal = queryParams['salarioMensal'];
    });
  }

  onFileSelected(event: any) {
    console.log(event);
    if (event.target.files && event.target.files[0]) {
      const foto = event.target.files[0];

      const formData = new FormData();
      formData.append('filetoupload', foto);

      this.selfieService.uploadImage(formData).subscribe((res) => {
        console.log('Upload');
        console.log(res);
        const imagem: any = res;

        this.urlImagem = imagem.url;
      });
    }
  }

  onUpload() {
    //Apenas navegar
    this.router.navigate(['/planos'], {
      queryParams: {
        cpf: this.cpf,
        salarioMensal: this.salarioMensal,
      },
    });
  }

  goBackPage() {
    const result = window.confirm(
      'Os dados vão ser perdidos caso não sejam salvos'
    );

    if (result) {
      this.router.navigate(['/dados']);
    }
  }
}
