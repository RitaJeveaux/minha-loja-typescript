import { Cliente } from "./Cliente";
import { Pedido } from "./Pedido";
import { ItemPedido } from "../ItemPedido";


console.log("\n-------- Bem Vindo a Minha Loja --------\n");

const cliente1 = new Cliente(1, 'João Pereira', 'joaop@email.com');
const cliente2 = new Cliente(2, 'Rosa Maria', 'rosam@email.com');


console.log('\n-------- Clientes Cadastrados ---------\n');
console.log(cliente1);
console.log(`Nome do cliente 2: ${cliente2.nome}`);

// criando instancias de itemPedido
const item1 = new ItemPedido('guitarra', 1500.00, 1);
const item2 = new ItemPedido('violao', 850.00, 1);
const item3 = new ItemPedido('caderno', 50.00, 3);
const item4 = new ItemPedido('canetas', 15.00, 10);



console.log('\n---------- Pedidos Criados ------------\n');
// criando instancias de pedidos
const pedido1 = new Pedido(101, new Date(), cliente1);
const pedido2 = new Pedido(102, new Date(), cliente2);
console.log('\n');

// associando pedidos aos clientes
cliente1.pedidos.push(pedido1);
cliente2.pedidos.push(pedido2);

//adicionando itens ao pedido
pedido1.itens.push(item1, item3);
pedido2.itens.push(item2, item4);

// calculando o total do pedido
console.log(`Total do pedido #101: R$ ${pedido1.total.toFixed(2)}`)
console.log(`Total do pedido #102: R$ ${pedido2.total.toFixed(2)}`)

console.log(cliente1);
console.log(cliente2);

// listando pedidos de um cliente
console.log('\n--------- Pedido dos Clientes ---------\n');

console.log(`Cliente: ${cliente1.nome}: `);
cliente1.pedidos.forEach(pedido => {
  console.log(`Pedido #${pedido.id} - Total: R$ ${pedido.total.toFixed(2)}`);
});

console.log(`Cliente: ${cliente2.nome}: `);
cliente2.pedidos.forEach(pedido => {
  console.log(`Pedido #${pedido.id} - Total: R$ ${pedido.total.toFixed(2)}`);
});

console.log('\n--------- Sistema Finalizado ----------\n');