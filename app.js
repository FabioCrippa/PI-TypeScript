"use strict";
//Exemplo de código typescript
let button = document.getElementById("button");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
function somarNumeros(num1, num2, devePrintar, frase) {
    let resultado = num1 + num2;
    if (devePrintar) {
        console.log(frase + resultado);
    }
    return num1 + num2;
}
//opção 1
let devePrintar = true;
let frase = "O valor é: ";
/* opção 2
let frase: string;
frase = "O valor é: "
*/
if (button) {
    button.addEventListener("click", () => {
        if (input1 && input2) {
            console.log(somarNumeros(Number(input1.value), Number(input2.value), devePrintar, frase));
        }
    });
}
/*
//Exemplo de código javascript

//pega os elementos no html
let button = document.getElementById("button");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");

//criei uma função para os dois inputs
function somarNumeros(num1, num2) {
    //validação, caso contrário, retorna uma ("string": 1 + 2 = 12)
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    } else {
        return Number(num1) + Number(num2);
    }
    
}
//adicionei ao botão um escutador para a função funcionar
button.addEventListener("click", () => {
    //imprime no console do navegador o resultado
    console.log(somarNumeros(input1.value, input2.value));
})
*/ 
