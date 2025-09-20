import { Pedido } from "./Pedido";


export class Cliente {

  public pedidos: Pedido[] = [];
    
  constructor(
    public id: number = 0,
    public nome: string,
    public email: string
  ) {
    console.log(`Cliente ${this.nome} criado com sucesso!`);
  }
}