async function criarItem(nome, preco, quantidade) {
    return {
        nome,
        preco,
        quantidade,
        subtotal: () => preco * quantidade,
    }
}

export default criarItem;