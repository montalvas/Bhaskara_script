
var botao = document.querySelector("input");
botao.addEventListener("click", clicar);

function clicar(){
    var a = Number(window.prompt("Qual o valor de a?"));
    var b = Number(window.prompt("Qual o valor de b?"));
    var c = Number(window.prompt("Qual o valor de c?"));

    var delta = Math.pow(b, 2) - (4 * a * c);

    var res = document.querySelector("div.res");
    res.innerHTML = `<strong>Resolução:</strong>`;
    
    var equacao = document.createElement("p");
    equacao.innerHTML = `A equação atual é ${a}x² + ${b}x + ${c} = 0`;
    res.appendChild(equacao);

    var calculo = document.createElement("p");
    calculo.innerHTML = `O cálculo realizado será 🛆 = (${b})² - 4 . ${a} . ${c}`;
    res.appendChild(calculo);

    var valor = document.createElement("P");
    valor.innerHTML = `O valor calculado foi <span style="background-color: yellow;">🛆 = ${delta}</span>.`;
    res.appendChild(valor);
}