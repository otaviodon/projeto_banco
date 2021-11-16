import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DadosCadastrais } from './dados.model';
import { DadosService } from './dados.service';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.scss'],
})
export class DadosComponent implements OnInit {
  formDados: FormGroup;
  valorStatus = 0;
  cpf: string = '';
  userData = false;
  showPassword: boolean = false;
  userDataInfo!: DadosCadastrais;

  constructor(
    private dadosService: DadosService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.formDados = new FormGroup({
      nomeCompleto: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      cpf: new FormControl('', Validators.required),
      dataNascimento: new FormControl('', Validators.required),
      dataCadastro: new FormControl('', Validators.required),
      salarioMensal: new FormControl('', Validators.required),
      senha: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      status: new FormControl(this.valorStatus, Validators.required),
      numeroCelular: new FormControl('', Validators.required),
      endereco: new FormGroup({
        cep: new FormControl('', Validators.required),
        rua: new FormControl('', Validators.required),
        numero: new FormControl('', Validators.required),
        bairro: new FormControl('', Validators.required),
        cidade: new FormControl('', Validators.required),
        estado: new FormControl('', Validators.required),
      }),
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.cpf = queryParams['cpf'];
      this.userData = queryParams['userData'];
      this.getUserData(this.cpf, this.userData);
    });
  }

  getUserData(cpf: string, hasData: boolean) {
    console.log(hasData);
    if (hasData) {
      this.dadosService.getCliente(cpf).subscribe((data) => {
        const userData: any = data;
        this.userDataInfo = userData.cliente;
        this.populaForm(this.userDataInfo);
      });
    } else {
      this.formDados.patchValue({
        cpf: cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"\$1.\$2.\$3\-\$4"),
      });
    }
  }

  populaForm(userData: DadosCadastrais) {
    this.formDados.patchValue({
      nomeCompleto: userData.nomeCompleto,
      email: userData.email,
      cpf: userData.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"\$1.\$2.\$3\-\$4"),
      dataNascimento: userData.dataNascimento,
      dataCadastro: userData.dataNascimento,
      salarioMensal: userData.salarioMensal,
      senha: userData.senha,
      status: userData.status,
      numeroCelular: userData.numeroCelular,
      endereco: {
        cep: userData.endereco.cep,
        rua: userData.endereco.rua,
        numero: userData.endereco.numero,
        bairro: userData.endereco.bairro,
        cidade: userData.endereco.cidade,
        estado: userData.endereco.estado,
      },
    });
  }

  onSubmit() {
    const salarioMensal = this.formDados.value.salarioMensal.replace(',', '.');

    const dadosCadastrais: DadosCadastrais = {
      nomeCompleto: this.formDados.value.nomeCompleto,
      email: this.formDados.value.email,
      cpf: this.formDados.value.cpf.replace(/(\.|\/|\-)/g,""),
      dataNascimento: this.formDados.value.dataNascimento,
      dataCadastro: this.formDados.value.dataCadastro,
      salarioMensal: salarioMensal,
      senha: this.formDados.value.senha,
      status: this.formDados.value.status,
      numeroCelular: this.formDados.value.numeroCelular,
      endereco: {
        cep: this.formDados.value.endereco.cep,
        rua: this.formDados.value.endereco.rua,
        numero: this.formDados.value.endereco.numero,
        bairro: this.formDados.value.endereco.bairro,
        cidade: this.formDados.value.endereco.cidade,
        estado: this.formDados.value.endereco.estado,
      },
    };

    this.dadosService
      .insertClient(dadosCadastrais)
      .subscribe((dataResponse) => {
        console.log(dataResponse);
      });

    console.log(dadosCadastrais);
    //this.formDados.reset();

    this.router.navigate(['/selfie'], {
      queryParams: {
        cpf: dadosCadastrais.cpf.replace(/(\.|\/|\-)/g,""),
        salarioMensal: dadosCadastrais.salarioMensal,
      },
    });
  }

  onClear() {
    const result = window.confirm('Deseja limpar o formulario?');
    if (result) {
      this.formDados.reset();
    }
  }

  goBackPage() {
    const result = window.confirm(
      'Os dados vão ser perdidos caso não sejam salvos'
    );

    if (result) {
      this.router.navigate(['/']);
    }
  }

  showPass(senha: HTMLInputElement) {
    this.showPassword = !this.showPassword;
    if (this.showPassword) {
      senha.type = 'text';
    } else {
      senha.type = 'password';
    }
  }

  consultaCEP() {
    let cep = this.formDados.value.endereco.cep;

    cep = cep.replace(/\D/g, '');

    if (cep != '') {
      //Expressão regular para validar o CEP
      var validacep = /^[0-9]{8}$/;

      //Valida o formato do CEP.
      if (validacep.test(cep)) {
        this.dadosService.buscaCep(cep).subscribe((data) => {
          const endereco: any = data;
          console.log(endereco);

          this.formDados.patchValue({
            endereco: {
              cep: endereco.cep,
              rua: endereco.logradouro,
              bairro: endereco.bairro,
              cidade: endereco.localidade,
              estado: endereco.uf,
            },
          });
        });
      }
    }
  }


}
