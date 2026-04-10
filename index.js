import criarItem from "./services/itens.js";
import * as funcoesCarrinho from "./services/carrinho.js";
const carrinho = [];

console.log("-------------------------");
console.log(">>>CARRINHO DE COMPRAS<<<");
console.log("-------------------------");



/*const item1 = await criarItem("Mamadeira", 9.65, 3);

const item2 = await criarItem("pct Fralda", 57.6, 5);

await funcoesCarrinho.adicionarItem (carrinho, item1);
await funcoesCarrinho.adicionarItem (carrinho, item2);

console.log("---------------------");
funcoesCarrinho.visualizarCarrinho(carrinho);
console.log("---------------------");
console.log("TOTAL DO CARRINHO: ");

await funcoesCarrinho.calcularTotal(carrinho);

await funcoesCarrinho.excluirItem(carrinho,"pct Fralda");

funcoesCarrinho.visualizarCarrinho(carrinho);  */

const itemTeste = await criarItem('lenco pct', 5.89, 3);
const itemTeste2 = await criarItem('mamadeira', 34.45, 7);

funcoesCarrinho.adicionarItem(carrinho,itemTeste);
funcoesCarrinho.adicionarItem(carrinho,itemTeste2);


console.log("-------------------------");

await funcoesCarrinho.removerItem(carrinho, itemTeste2.nome, 1);

await funcoesCarrinho.visualizarCarrinho(carrinho);

