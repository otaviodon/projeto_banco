import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AlteracaoPlano } from './alteracaoPlano.model';
import { Planos } from './planos.model';
import { PlanosService } from './planos.service';

@Component({
  selector: 'app-planos',
  templateUrl: './planos.component.html',
  styleUrls: ['./planos.component.scss']
})
export class PlanosComponent implements OnInit {
  cpf: string = '';
  salarioMensal: string = '';
  listaPlanos: Planos[] = [];
  formPlanos: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private planosService: PlanosService,
    private router: Router
  ) {
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.cpf = queryParams['cpf'];
      this.salarioMensal = queryParams['salarioMensal'];
    });
    this.planos();
    this.formPlanos = new FormGroup({
      _id: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    //console.log(this.formPlanos)
    const id = this.formPlanos.value._id;
    const planoSelecionado = this.filterPlanos(id);

    console.log(planoSelecionado);

    const alteracaoPlano: AlteracaoPlano = {
      cpf: this.cpf,
      plano: {
        custoMensal: planoSelecionado[0].custoMensal,
        tipoCartao: planoSelecionado[0].tipoCartao,
        tipoConta: planoSelecionado[0].tipoConta,
      },
    };

    console.log(alteracaoPlano);

    this.planosService.changeClientPlan(alteracaoPlano).subscribe((data) => {
      console.log(data);
    });

    this.router.navigate(['/infos'], {
      queryParams: {
        cpf: this.cpf,
      },
    });
  }

  planos() {
    this.planosService
      .getPlanosPorRenda(this.salarioMensal)
      .subscribe((resData: any) => {
        const todosOsPlanos: any = resData;
        this.listaPlanos = todosOsPlanos.planos;
        console.log(this.listaPlanos);
      });
  }

  filterPlanos(id: string) {
    console.log(id);
    const planoSelecionado = this.listaPlanos.filter(function (plano) {
      return plano._id === id;
    });
    return planoSelecionado;
  }

}
