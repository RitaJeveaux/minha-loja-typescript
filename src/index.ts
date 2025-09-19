import { Cliente } from "./Cliente";
import { Pedido } from "./Pedido";


console.log("\n-------- Bem Vindo a Minha Loja --------\n");

const cliente1 = new Cliente(1, 'João Pereira', 'joaop@email.com');
const cliente2 = new Cliente(2, 'Rosa Maria', 'rosam@email.com');


console.log('\n-------- Clientes Cadastrados ---------\n');
console.log(cliente1);
console.log(`Nome do cliente 2: ${cliente2.nome}`);



console.log('\n---------- Pedidos Criados ------------\n');
// criando instancias de pedidos
const pedido1 = new Pedido(101, new Date());
const pedido2 = new Pedido(102, new Date());
console.log('\n');

console.log(`Total do pedido 1: R$ ${pedido1.total.toFixed(2)}`)


console.log('\n--------- Sistema Finalizado ----------\n');