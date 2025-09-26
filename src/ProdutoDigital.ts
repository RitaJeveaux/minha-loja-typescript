import { Produto } from "./Produto";

export class ProdutoDigital extends Produto {

  constructor(
    public id: number,
    public nome: string,
    public preco: number,
    public descricao: string,
    public linkDownload: string
  ) {
    super(id, nome, preco, descricao);
  }
}