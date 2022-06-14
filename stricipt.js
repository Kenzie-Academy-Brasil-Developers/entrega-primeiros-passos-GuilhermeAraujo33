
let produto1 = "Refrigerante"
let produto2 = "Macarrao"
let produto3 = "Ervilha"
let produto4 = "Arroz"
let produto5 = "Feijao"
let produto6 = "Vinho"

let quantidadeProduto1 = 3
let quantidadeProduto2 = 4
let quantidadeProduto3 = 3
let quantidadeProduto4 = 3
let quantidadeProduto5 = 2
let quantidadeProduto6 = 3

const valorProduto1 = 11.99
const valorProduto2 = 6.99
const valorProduto3 = 6.99
const valorProduto4 = 22.99
const valorProduto5 = 11.89
const valorProduto6 =  70.00

let totalValorProduto1 = valorProduto1 * quantidadeProduto1
let totalValorProduto2 = valorProduto2 * quantidadeProduto2
let totalValorProduto3 = valorProduto3 * quantidadeProduto3
let totalValorProduto4 = valorProduto4 * quantidadeProduto4
let totalValorProduto5 = valorProduto5 * quantidadeProduto5
let totalValorProduto6 = valorProduto6 * quantidadeProduto6

let somaDaCompra = totalValorProduto1 + totalValorProduto2 + totalValorProduto3 + totalValorProduto4 + totalValorProduto5 + totalValorProduto6
let metade = somaDaCompra / 2

console.log("Valor total da compra:", somaDaCompra)

if(somaDaCompra % 2 == 0){
    let voce = metade - totalValorProduto6;
    let amigo = metade + totalValorProduto6;
    console.log(`Voce ira pagar ${voce} e seu amigo ${amigo}`)
  }else{
    let voce = metade;
    let amigo = metade;
    console.log(`Voce ira pagar ${voce} e seu amigo ${amigo}`)
  }

    let produto = (prompt("Digite seu produto"))

    if(produto == produto1){
        let valor = parseFloat(prompt("Digite o valor do produto"))
        let quantidade = parseInt(prompt("Quantas unidades?"))
        let total = valor * quantidade
        let metade = total / 2
        let voce = metade
        let amigo = metade
        alert(`Seu produto é ${produto}, o valor é de ${valor} reais, a quantidade desejada é ${quantidade} unidades, o total a ser pago é de ${total} reais, você pagará ${voce} e seu amigo ${amigo}`)
    }
    if(produto == produto2){
        let valor = parseFloat(prompt("Digite o valor do produto"))
        let quantidade = parseInt(prompt("Quantas unidades?"))
        let total = valor * quantidade
        let metade = total / 2
        let voce = metade
        let amigo = metade
        alert(`Seu produto é ${produto}, o valor é de ${valor} reais, a quantidade desejada é ${quantidade} unidades, o total a ser pago é de ${total} reais, você pagará ${voce} e seu amigo ${amigo}`)
    }
    if(produto == produto3){
        let valor = parseFloat(prompt("Digite o valor do produto"))
        let quantidade = parseInt(prompt("Quantas unidades?"))
        let total = valor * quantidade
        let metade = total / 2
        let voce = metade
        let amigo = metade
        alert(`Seu produto é ${produto}, o valor é de ${valor} reais, a quantidade desejada é ${quantidade} unidades, o total a ser pago é de ${total} reais, você pagará ${voce} e seu amigo ${amigo}`)
    }
    if(produto == produto4){
        let total = valorProduto4 * quantidadeProduto4
        alert(`Valor total a ser pago: ${total}`)
    }
    if(produto == produto5){
        let valor = parseFloat(prompt("Digite o valor do produto"))
        let quantidade = parseInt(prompt("Quantas unidades?"))
        let total = valor * quantidade
        let metade = total / 2
        let voce = metade
        let amigo = metade
        alert(`Seu produto é ${produto}, o valor é de ${valor} reais, a quantidade desejada é ${quantidade} unidades, o total a ser pago é de ${total} reais, você pagará ${voce} e seu amigo ${amigo}`)
    }
    if(produto == produto6){
        let valor = parseFloat(prompt("Digite o valor do produto"))
        let quantidade = parseInt(prompt("Quantas unidades?"))
        let total = valor * quantidade
        let metade = total / 2
        let voce = metade
        let amigo = metade
        alert(`Seu produto é ${produto}, o valor é de ${valor} reais, a quantidade desejada é ${quantidade} unidades, o total a ser pago é de ${total} reais, você pagará ${voce} e seu amigo ${amigo}`)
    }
    else if(produto != produto1 && produto != produto2 && produto != produto3 && produto != produto4 && produto != produto5 && produto != produto6){
        alert(`Não temos esse produto`)
    }



