export interface User {
  name: string;
  email: string;
  cep: string;
  numero: number;
  complemento?: string;
  rua: string;
  bairro: string;
  cidade: string;
  estado: string;
  senha: string;
  confirmarSenha: string;
}
