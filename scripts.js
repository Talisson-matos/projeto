let resultado = document.getElementById("resultado");
let valorAtual = '';
let valorAnterior = '';
let operacao = '';

function adicionarNumero(numero){
    valorAtual+=numero;
    resultado.value=valorAtual;
}

function setOperacao(op){
    if(valorAtual==='')return;
    if(valorAnterior !== ''){
        calcular();
    }
    operacao=op;
    valorAnterior=valorAtual;
    valorAtual='';
}

function calcular() {
    let calculo;
    const anterior = parseFloat(valorAnterior);
    const atual = parseFloat(valorAtual);

    if(isNaN(anterior) || isNaN(atual) )return;

    switch(operacao){
        case'+':
        calculo=anterior+atual;
        break;
        case'-':
        calculo=anterior-atual;
        break;
        case'*':
        calculo=anterior * atual;
        break;
        case'/':
        calculo=anterior/atual;
        break;
        default:
            return;
    }
    resultado.value=calculo;
    valorAtual=calculo;
    valorAnterior='';
    operacao='';
   

}

function limpar(){
    valorAtual='';
    valorAnterior='';
    operacao='';
    resultado.value='';
}


document.addEventListener('keydown', function(event){
    const tecla = event.key;
    if(!isNaN(tecla)){
        adicionarNumero(tecla);

    } else if(['+', '-', '*', '/'].includes(tecla)){
        setOperacao(tecla);
    }else if(tecla ===  'Enter'){
        calcular();
    }else if(tecla === 'Backspace'){
        limpar()
    }


})







// document.addEventListener('keydown', function(event) {
//     const tecla = event.key;

//     if (!isNaN(tecla)) {
//         // Se for um número, adiciona ao valor atual
//         adicionarNumero(tecla);
//     } else if (['+', '-', '*', '/'].includes(tecla)) {
//         // Se for uma operação, define a operação
//         setOperacao(tecla);
//     } else if (tecla === 'Enter') {
//         // Se pressionar Enter, realiza o cálculo
//         calcular();
//     } else if (tecla === 'Escape') {
//         // Se pressionar Escape, limpa a calculadora
//         limpar();
//     }
// });















// let resultado = document.getElementById("resultado");
// let valorAtual = '';
// let valorAnterior = '';
// let operacao = '';

// // Função para adicionar número ao display
// function adicionarNumero(numero) {
//     valorAtual += numero;
//     resultado.value = valorAtual;
// }

// // Função para definir a operação
// function setOperacao(op) {
//     if (valorAtual === '') return;
//     if (valorAnterior !== '') {
//         calcular();
//     }
//     operacao = op;
//     valorAnterior = valorAtual;
//     valorAtual = '';
// }

// // Função para calcular o resultado
// function calcular() {
//     let calculo;
//     const anterior = parseFloat(valorAnterior);
//     const atual = parseFloat(valorAtual);
    
//     if (isNaN(anterior) || isNaN(atual)) return;

//     switch (operacao) {
//         case '+':
//             calculo = anterior + atual;
//             break;
//         case '-':
//             calculo = anterior - atual;
//             break;
//         case '*':
//             calculo = anterior * atual;
//             break;
//         case '/':
//             calculo = anterior / atual;
//             break;
//         default:
//             return;
//     }

//     resultado.value = calculo;
//     valorAtual = calculo;
//     valorAnterior = '';
//     operacao = '';
// }

// // Função para limpar o display
// function limpar() {
//     valorAtual = '';
//     valorAnterior = '';
//     operacao = '';
//     resultado.value = '';
// }