// import { Cliente } from "./Cliente"

export class Pedidos {
  private _total: number = 0;

  constructor(
    public id: number,
    public data: Date
  ) {
    console.log(`Pedido ${this.id} criado com sucesso!`)
  }

}