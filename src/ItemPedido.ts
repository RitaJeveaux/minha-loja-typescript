export class ItemPedido {

  private _valorUnitario: number = 0;
  private _quantidade: number = 0;

  constructor(
    public nomeProduto: string,
    valor: number,
    qtd: number
  ) {
    this.valorUnitario = valor;
    this.quantidade = qtd;
  }

  public get valorUnitario(): number {
    return this._valorUnitario;
  }

  public get quantidade(): number {
    return this._quantidade;
  }

  public set valorUnitario(novoValor: number) {
    if (novoValor > 0) {
      this._valorUnitario = novoValor;
    } else {
      console.log(`O valor unitário deve ser positivo.`)
    }
  }

  public set quantidade(novaQuantidade: number) {
    if (novaQuantidade > 0) {
      this._quantidade = novaQuantidade;
    } else {
      console.log(`O quantidade deve ser positiva.`)
    }
  }

  public calcularSubTotal(): number {
    return this._valorUnitario * this._quantidade;
  }
}