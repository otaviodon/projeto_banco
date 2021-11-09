import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroService } from './cadastro.service';
import { UserDados } from './userDados.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  formCadastro: FormGroup;
  usuariosCadastrados: UserDados[] = [];
  canNavigate = false;

  constructor(
    private cadastroService: CadastroService,
    private router: Router
  ) {
    this.formCadastro = new FormGroup({
      cpf: new FormControl('', [Validators.required, Validators.minLength(11)]),
    });
    this.fetchUsers();
  }

  ngOnInit() {
    setTimeout(() => {
      console.log(this.usuariosCadastrados);
    }, 400);
  }

  fetchUsers() {
    this.cadastroService.getUsers().subscribe((data) => {
      this.usuariosCadastrados = data;
    });
  }

  onSubmit() {
    const cpfCliente = this.formCadastro.value.cpf;
    if (cpfCliente.length === 11) {
      this.canNavigate = false;
      this.verifyIfUserExists(cpfCliente);
    } else {
      this.canNavigate = true;
    }
  }

  verifyIfUserExists(cpf: string) {
    this.cadastroService.veriryUserExists(cpf).subscribe((resData) => {
      const objResponse: any = resData;
      console.log(objResponse);
      if (objResponse.cliente) {
        //console.log('USUARIO EXISTE');
        this.router.navigate(['dados'], {
          queryParams: { cpf: cpf, userData: true },
        });
      } else {
        this.router.navigate(['dados'], {
          queryParams: { cpf: cpf, userData: false },
        });
        //console.log('USUARIO NÃO EXISTE');
      }
    });
  }

/*   verifyIfUserExistsFilter(cpf: string): UserDados[] {
    const pessoExiste = this.usuariosCadastrados.filter(function (pessoa) {
      return pessoa.cpf === cpf;
    });
    return pessoExiste;
  } */
}
