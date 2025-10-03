import { Pedido } from './Pedido';
import { ItemPedido } from './ItemPedido';
import { ProdutoDigital } from './ProdutoDigital';
import { ProdutoFisico } from './ProdutoFisico';
import { ClientePessoaFisica } from './ClientePessoaFisica';
import { ClientePessoaJuridica } from './ClientePessoaJuridica';

console.log('\n-------- Bem Vindo a Minha Loja --------\n');

const clientePF = new ClientePessoaFisica(
  1,
  'joaop@email.com',
  'João Pereira',
  '123.456.789-09',
);
const clientePJ = new ClientePessoaJuridica(
  2,
  'contato@empresa.com',
  'Empresa X',
  '05.486.750.496/0001',
);

console.log('\n-------- Clientes Cadastrados ---------\n');
console.log(clientePF);
console.log(`Nome do cliente 2: ${clientePJ.razaoSocial}`);

// criando instancias do produto
const livro = new ProdutoFisico(
  1,
  'O Senho dos Aneis',
  50,
  'Livro de Fantasia',
  500,
);
const ebook = new ProdutoDigital(
  2,
  'Game os Thrones',
  30,
  'E-book de Fantasia',
  'www.link.com',
);
const placaDeVideo = new ProdutoFisico(
  3,
  'placaDeVideo',
  3500,
  'Placa de Jogos',
  1000,
);
const mouseGamer = new ProdutoFisico(
  4,
  'mouseGamer',
  150,
  'Mouse para Jogos',
  200,
);

// criando instancias de itemPedido
const item1 = new ItemPedido(placaDeVideo, 1);
const item2 = new ItemPedido(mouseGamer, 1);
const item3 = new ItemPedido(livro, 3);
const item4 = new ItemPedido(ebook, 10);

console.log('\n---------- Pedidos Criados ------------\n');
// criando instancias de pedidos
const pedido1 = new Pedido(101, new Date(), clientePF);
const pedido2 = new Pedido(102, new Date(), clientePJ);
console.log('\n');

// associando pedidos aos clientes
clientePF.adicionarPedido(pedido1);
clientePJ.adicionarPedido(pedido2);

//adicionando itens ao pedido
pedido1.adicionarItem(item1);
pedido1.adicionarItem(item2);
pedido2.adicionarItem(item3);
pedido2.adicionarItem(item4);

// calculando o total do pedido
console.log(`Total do pedido #101: R$ ${pedido1.total.toFixed(2)}`);
console.log(`Total do pedido #102: R$ ${pedido2.total.toFixed(2)}`);

console.log(clientePF);
console.log(clientePJ);

// listando pedidos de um cliente
console.log('\n--------- Pedido dos Clientes ---------\n');

console.log(`Cliente: ${clientePF.nome}: `);
clientePF.pedidos.forEach((pedido) => {
  console.log(`Pedido #${pedido.id} - Total: R$ ${pedido.total.toFixed(2)}`);
});

console.log(`Cliente: ${clientePJ.razaoSocial}: `);
clientePJ.pedidos.forEach((pedido) => {
  console.log(`Pedido #${pedido.id} - Total: R$ ${pedido.total.toFixed(2)}`);
});

// Verificando conexões entre clientes e pedidos
console.log('\n--------- Verificando Conexões ----------\n');
console.log('Cliente do pedido 1:');
console.log(clientePF);
console.log('\nResumo do pedido 1:');
console.log(pedido1.obterResumo());

console.log('\n---- Testando validações do ItemPedido --------');
console.log(`Tentando criar item com quantidade negativa...`);
const itemInvalido2 = new ItemPedido(placaDeVideo, 1);
console.log(itemInvalido2);
console.log(`\nTentando atribuir quantidade negativa a um pedido existente...`);
console.log(`Quantidade original do item2: ${item2.quantidade}`);
item2.quantidade = -5;
console.log(
  `Quantidade do item2 após tentativa de alteraçã: ${item2.quantidade}`,
);

console.log('\n---- Testando Metodo Total Gasto ------\n');
console.log(
  `Total gasto por ${clientePF.nome} R$ ${clientePF
    .calcularTotalGasto()
    .toFixed(2)}`,
);

console.log('\n---- Testando Fluxo de Entrega --------');

console.log(`\n Status inicial do pedido 1: ${pedido1.status}`);
pedido1.pagar();
console.log(`\n Status do pedido 1 após pago: ${pedido1.status}`);
pedido1.enviar();
console.log(`\n Status do pedido 1 após envio: ${pedido1.status}`);
pedido1.entregar();
console.log(`\n Status do pedido 1 após entrega: ${pedido1.status}`);

console.log('\n---- Testando Acesso aos Atributos --------');

console.log(`E-mail do cliente PF: ${clientePF.email}`);
console.log(`CPF do cliente PF: ${clientePF.cpf}`);

console.log(`E-mail do cliente PJ: ${clientePJ.email}`);
console.log(`CNPJ do cliente PF: ${clientePJ.cnpj}`);

console.log('\n---- Pedidos Realizados --------');

console.log(
  `Total gasto por ${clientePF.nome}: R$ ${clientePF.calcularTotalGasto()}`,
);
console.log(
  `Total gasto por ${
    clientePJ.razaoSocial
  }: R$ ${clientePJ.calcularTotalGasto()}`,
);

console.log('\n--------- Sistema Finalizado ----------\n');
