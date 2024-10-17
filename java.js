function realizarPix() {
    const valor = prompt("Digite o valor que deseja transferir via Pix:");
    const chave = prompt("Digite a chave Pix do destinatário:");

    if (valor && chave) {
        alert(`Transação Pix realizada com sucesso!\nValor: R$ ${valor}\nChave: ${chave}`);
    } else {
        alert("Transação cancelada.");
    }
}

function pagarComCodigoBarra() {
    const codigo = prompt("Digite o código de barras:");

    if (codigo) {
        alert(`Pagamento realizado com sucesso!\Código de barras: ${codigo}`);
    } else {
        alert("Pagamento cancelado.");
    }
}

function transferirValor() {
    const valor = prompt("Digite o valor que deseja transferir:");
    const contaDestino = prompt("Digite o número da conta de destino:");

    if (valor && contaDestino) {
        alert(`Transferência realizada com sucesso!\nValor: R$ ${valor}\nConta de destino: ${contaDestino}`);
    } else {
        alert("Transferência cancelada.");
    }
}


function depositarValor() {
    const valor = prompt("Digite o valor que deseja depositar:");

    if (valor) {
        alert(`Depósito realizado com sucesso!\nValor: R$ ${valor}`);
    } else {
        alert("Depósito cancelado.");
    }
}


function pegarEmprestimo() {
    const valor = prompt("Digite o valor que deseja pegar emprestado:");
    const parcelas = prompt("Digite a quantidade de parcelas:");

    if (valor && parcelas) {
        alert(`Empréstimo realizado com sucesso!\nValor: R$ ${valor}\nQuantidade de parcelas: ${parcelas}`);
    } else {
        alert("Empréstimo cancelado.");
    }
}

document.querySelector('.acao-pix').addEventListener('click', realizarPix);
document.querySelector('.acao-pagar').addEventListener('click', pagarComCodigoBarra);
document.querySelector('.acao-transferir').addEventListener('click', transferirValor);
document.querySelector('.acao-depositar').addEventListener('click', depositarValor);
document.querySelector('.acao-emprestimo').addEventListener('click', pegarEmprestimo);
