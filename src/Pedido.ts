// import { Cliente } from "./Cliente"

export class Pedido {
  private _total: number = 0;

  constructor(
    public id: number,
    public data: Date
  ) {
    console.log(`Pedido #${this.id} criado na data ${this.data.toLocaleString()}!`)
  }
  public get total(): number {
    return this._total;
  }
}