export interface UserDados {
  _id: string;
  nomeCompleto: string;
  email: string;
  cpf: string;
  dataNascimento: string;
  dataCadastro: string;
  numeroCelular: string;
  status: number;
  __v: number;
  endereco: {
    cep: string;
    rua: string;
    numero: string;
    bairro: string;
    cidade: string;
    estado: string;
  };
}
