import { Pedido } from "./Pedido";

export abstract class ClienteBase {

  public pedidos: Pedido[] = [];
  private _id: number = 0; 
  private _email: string;

  constructor(
    id: number, 
    email: string
  ) {
    this._id = id;    
    this._email = '';  
    this.email = email; 
  }

  public get id(): number {
    return this._id;
  }

  public get email(): string {
    return this._email;
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

  public toJSON() {
    return {
      id: this.id,     
      email: this.email
    }
  }

  public aplicarAtualizacoes(dados: any): void {
    if (dados.email) {
      this.email = dados.email;
    }
  }

}