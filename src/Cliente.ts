import { Pedido } from "./Pedido";


export class Cliente {

  public pedidos: Pedido[] = [];
  private _id: number = 0;
  private _nome: string;
  private _email: string;

  constructor(
    id: number,
    nome: string,
    email: string
  ) {
    this._id = id;
    this._nome = '';
    this._email = '';
    this.nome = nome;
    this.email = email;
    console.log(`Cliente ${this.nome} criado com sucesso!`);
  }


  public get id(): number {
    return this._id;
  }

  public get nome(): string {
    return this._nome;
  }

  public get email(): string {
    return this._email;
  }

  public set nome(novoNome: string) {
    if (novoNome.length < 3) {
      console.log(`Erro: O nome deve ter no mínimo 3 caracteres.`);
      return;
    }
    this._nome = novoNome;
  }

  public set email(novoEmail: string) {
    if (!novoEmail.includes('@')) {
      console.log(`Erro: O email deve conter '@'.`);
      return;
    }
    this._email = novoEmail;
  }

  public adicionarPedido(pedido: Pedido): void {
    this.pedidos.push(pedido);
  }

  public calcularTotalGasto(): number {
    let total = 0;
    for (const pedido of this.pedidos) {
      total += pedido.total;
    }
    return total;
  }
}