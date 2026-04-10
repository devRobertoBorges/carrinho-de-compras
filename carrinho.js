export {adicionarItem, calcularTotal, removerItem, excluirItem, visualizarCarrinho};

async function adicionarItem(userCart, item){
    //aplicar o item no carrinho
    userCart.push(item);
    console.log(`-> ITEM: {${item.nome}} ADICIONADO!`);
}

async function removerItem(userCart, name, qtdadesExcluir){
    //econtrar o indice
    const acharIndex = userCart.findIndex((p) => p.nome === name);

    //caso n econtre nada
    if (acharIndex === -1){
        console.log('item não encontrado')
        return;
    }

    //caso a quantidade para excluir for menor ou igual 0
    if (qtdadesExcluir <= 0){
        console.log('quantidade invalida');
        return;
    }

    //salva o item do array
    const itemCarrinho = userCart[acharIndex];

    //validacao de quantidade de exclusao, se é menor exlcui, se é maior aponta erro, e se é igual remove o item.
    if (itemCarrinho.quantidade < qtdadesExcluir){
        console.log('erro: quantidade para excluir maior que a quantidade do item')
    }else if(itemCarrinho.quantidade === qtdadesExcluir){
        userCart.splice(acharIndex, 1);
        console.log('item deletado!')
    }else if(itemCarrinho.quantidade > qtdadesExcluir){
        itemCarrinho.quantidade -= qtdadesExcluir;
        console.log(`>>> FOI EXCLUIDO ${qtdadesExcluir} UNIDADE(S) DE ${itemCarrinho.nome} `);
    }
}   

async function excluirItem(userCart, name){
    //acha o index PELO NOME do item a ser removido, utilizando a funcao findIndex
    const index = userCart.findIndex((item) => item.nome === name);
    //valida se o indice retorna certo
    if (index != -1){
        //remove o item
        userCart.splice (index,1);
        console.log(`-> O ITEM {${name}} FOI REMOVIDO!`)
    }else(console.log('erro'))

}


async function calcularTotal(userCart) {
    //usa o REDUCE para calcular o total dos subtotais de todos os itens do array
    const resultado = userCart.reduce((total,item) => total + item.subtotal(), 0)
    console.log(`R$ ${resultado.toFixed(2)}`);
}

async function visualizarCarrinho(userCart) {
    console.log("TODOS OS ITENS DO SEU CARRINHO:")
    // usa o FOREACH para percorrer todo o array colocando as caracteristacas dos produtos pelo ITEM e puxando o ITEM pelo INDEX.
    userCart.forEach((item, index) => {
        console.log(`${index + 1} -> ${item.nome} R$ ${item.preco} \n | QTDE: ${item.quantidade} | SUBTOTAL= R$ ${item.subtotal().toFixed(2)}`)
    });
}