export class Cliente {

  constructor(
    public id: number = 0,
    public nome: string,
    public email: string
  ) {
    this.id = id,
      this.nome = nome,
      this.email = email
  }
}