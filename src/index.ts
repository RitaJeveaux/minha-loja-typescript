import { Cliente } from "./Cliente";
import { Pedido } from "./Pedido";
import { ItemPedido } from "./ItemPedido";


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
cliente1.adicionarPedido(pedido1);
cliente2.adicionarPedido(pedido2);

//adicionando itens ao pedido
pedido1.adicionarItem(item1);
pedido1.adicionarItem(item2);
pedido2.adicionarItem(item3);
pedido2.adicionarItem(item4);

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

// Verificando conexões entre clientes e pedidos
console.log('\n--------- Verificando Conexões ----------\n');
console.log('Cliente do pedido 1:');
console.log(cliente1);
console.log('\nResumo do pedido 1:');
console.log(pedido1.obterResumo());

console.log('\n---- Testando validações do ItemPedido --------');
console.log(`Tentando criar item com valor negativo...`);
const itemInvalido1 = new ItemPedido('Produto ruim.', -100, 1);
console.log(itemInvalido1);
console.log(`Tentando criar item com quantidade negativa...`);
const itemInvalido2 = new ItemPedido('Produto ruim.', 100, -1);
console.log(itemInvalido2);
console.log(`\nTentando atribuir quantidade negativa a um pedido existente...`);
console.log(`Quantidade original do item2: ${item2.quantidade}`);
item2.quantidade = -5;
console.log(`Quantidade do item2 após tentativa de alteraçã: ${item2.quantidade}`);

console.log('\n---- Testando Metodo Total Gasto ------\n');
console.log(`Total gasto por ${cliente1.nome} R$ ${cliente1.calcularTotalGasto().toFixed(2)}`)

console.log('\n---- Testando Fluxo de Entrega --------');

console.log(`\n Status inicial do pedido 1: ${pedido1.status}`)
pedido1.pagar();
console.log(`\n Status do pedido 1 após pago: ${pedido1.status}`)
pedido1.enviar();
console.log(`\n Status do pedido 1 após envio: ${pedido1.status}`)
pedido1.entregar();
console.log(`\n Status do pedido 1 após entrega: ${pedido1.status}`)

console.log('\n--------- Sistema Finalizado ----------\n');