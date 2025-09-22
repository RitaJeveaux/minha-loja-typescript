# E-commerce Simples com Typescript 

## Aula 2
### Exercicio da aula 2
- Criar a Classe ItemPedido com os atributos nomeProduto, valorUnitario e quantidade.
- Conectar as Classes adicionando os atributos `cliente: Cliente` e `itens: ItemPedido[]` à classe Pedido.
- Colocar Tudo para Funcionar no index.ts importando as novas classes, criando as instâncias,
associando os objetos e verificando o resultado em um console.log
## Aula 3
### Atividade prática
- Fazer com que a classe Pedido, gerencie seus itens e calcule o total de forma autônoma.
### Exercicio da aula 3

<<<<<<< exercicio-aula3
- Na classe Cliente:
    - **Adicionar Pedido**: Crie um método público `adicionarPedido(pedido: Pedido): void`. Este método deve adicionar o pedido recebido ao array `pedidos` do cliente.
    - **Calcular Total Gasto**: Crie um método público `calcularTotalGasto(): number`. Este método deve percorrer o array de pedidos do cliente, somar o total de cada pedido e retornar o valor final.
- Na classe Pedido:
    - **Status do Pedido**: Adicione um novo atributo privado `_status: string`, e inicialize-o com o valor `"pendente"` no `constructor`.
    - **Métodos de Status**: Crie três métodos públicos que alteram o status do pedido:
        - `pagar(): void`: Muda o `_status` para `"pago"`.
        - `enviar(): void`: Só pode ser executado se o status for `"pago"`. Se for, muda o `_status` para `"enviado"`.
        - `entregar(): void`: Só pode ser executado se o status for `"enviado"`. Se for, muda o `_status` para `"entregue"`.
    - **Getter de Status**: Crie um getter público `public get status(): string` para permitir a leitura do status de fora da classe.
- No index.ts
    - Após criar um cliente e um pedido, use o novo método `cliente1.adicionarPedido(pedido1);`.
    - Chame o método de cálculo para testar:
      ```typescript
      console.log(`Total gasto por ${cliente1.nome}: R$ ${cliente1.calcularTotalGasto()}`);
      ```
    - Teste o ciclo de vida do pedido:
      ```typescript
      console.log(`Status inicial: ${pedido1.status}`);
      pedido1.pagar();
      console.log(`Status após pagar: ${pedido1.status}`);
      pedido1.enviar();
      console.log(`Status após enviar: ${pedido1.status}`);
      ```

## Comandos


### Pré-requisitos: 
Certifique-se de ter o Node.js instalado em sua máquina.

### Instalar as dependências:
```bash
npm install
```

### Criar um projeto do zero:
```bash
npm init -y
npm i typescript ts-node @types/node --save-dev
npx tsc --init
```

### Executar a simulação:
```bash
npx ts-node src/index.ts
```
=======

## Como Executar

1.  **Pré-requisitos**: Certifique-se de ter o Node.js instalado em sua máquina.

2.  **Instalar dependências**: No diretório raiz do projeto, execute o comando para instalar os pacotes necessários:
    ```bash
    npm install
    ```

3.  **Executar a simulação**: Para rodar o script principal que simula as operações bancárias, utilize:
    ```bash
    npx ts-node src/index.ts
    ```

## Comandos para iniciar um projeto do zero:
 ```bash
npm init -y
npm i typescript ts-node @types/node --save-dev
npx tsc --init
  ```

>>>>>>> main
