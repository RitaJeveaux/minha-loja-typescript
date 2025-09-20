import { Cliente } from "./Cliente"
import { ItemPedido } from "../ItemPedido";

export class Pedido {
  private _total: number = 0;

  public cliente: Cliente;
  public itens: ItemPedido[] = [];

  constructor(
    public id: number,
    public data: Date,
    cliente: Cliente
  ) {
    this.cliente = cliente;

    console.log(`Pedido #${this.id} criado na data ${this.data.toLocaleString()}!`)
  }
  public get total(): number {
    return this._total;
  }
}