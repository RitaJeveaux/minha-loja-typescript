import { Produto } from "./Produto";

export class ProdutoFisico extends Produto {

  constructor(
    public id: number,
    public nome: string,
    public preco: number,
    public descricao: string,
    public pesoEmGramas: number
  ) {
    super(id, nome, preco, descricao);
  }
}