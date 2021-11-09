export interface AlteracaoPlano {
  cpf: string;
  plano: {
    custoMensal: string;
    tipoCartao: string;
    tipoConta: string;
  };
}
