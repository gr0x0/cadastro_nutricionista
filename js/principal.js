/* É importante notar que a execução do script é sequencial, linha a linha. */

/* alert() lança uma mensagem de alerta na tela. */
alert("Bem vinda, Aparecida");

/* console.log() lança o que receber de parâmetro no console do browser (F12 e aba console). */
console.log("Olá Aparecida");

/* O DOM, document object model, é a representação do HTML para o javascript, acessível pela palavra reservada 'document'. Tudo que é modificado
	no document aparece para o usuário via browser. console.log<document> leva para o console (F12, aba console) a estrutura da página para
	consulta. */
console.log(document);
/* Com document.querySelector() podemos procurar por uma tag específica dentro da página. */
console.log(document.querySelector("h1"));
/* Pode-se capturar valores em variáveis usando var. */
var titulo = document.querySelector("h1");
/* Elementos da página que tenham texto permitem acesso a ele através de textContent. */
titulo.textContent = "Banana";

/* Essa forma de modificar valores de texto é ruim uma vez que depende da imutabilidade de h1. No quesito boas práticas de javascript, deve-se
	utilizar seletores de CSS, declarando classes para os elementos dde html que desejamos manipular de forma a torná-los únicos. A tag h1, agora,
	ficou <h1 class="titulo">Aparecida Nutrição</h1>.
	Para selecionarmos classes CSS com querySelector, utilizamos '.<nome da classe>'. */
var titulo2 = document.querySelector(".titulo");
titulo2.textContent = "Aparecida Nutricionista";

/* Agora para que a página calcule o IMC (peso/altura^2) de cada paciente automaticamente: podemos buscar uma informação apenas na tag específica
		tr de carregada paciente ao usarmos console.log(paciente). Mas precisamos definir para cada paciente um id, uma vez que devemos percorrer
		um a um. Portanto, a tag tr inicial do primeiro paciente ficou <tr class="paciente" id="paciente1">.
		É importante notar que para selecionarmos um id CSS com querySelector, utilizamos '#<nome do id>'. */
var paciente = document.querySelector("#paciente1");
console.log(paciente);
var peso = paciente.querySelector(".info-peso").textContent;
console.log(peso);
var altura = paciente.querySelector(".info-altura").textContent;
console.log(altura);
var imc = peso / (altura * altura);
console.log(imc);
paciente.querySelector(".info-imc").textContent = imc;

/* Para introduzirmos validação de dados, vamos reescrever as linhas anteriores da seguinte forma: */
var pesoEhValido = true;
var alturaEhValida = true;
paciente.querySelector(".info-imc").textContent = 0; //Retornando imc do html para o default

if (peso <= 0 || peso >= 1000) {
    console.log("Peso inválido");
		pesoEhValido = false;
		paciente.querySelector(".info-imc").textContent = "Peso inválido!";
}
if (altura <= 0 || altura >= 3.00) {
    console.log("Altura inválido");
		alturaEhValida = false;
		paciente.querySelector(".info-imc").textContent = "Altura inválida!";
}

if (alturaEhValida && pesoEhValido) {
    imc = peso / (altura * altura);
		paciente.querySelector(".info-imc").textContent = imc;
}

/* Fazendo um loop para todos os pacientes, usamos querySelectorAll(), que nos retorna um array com todos os elementos que pertençam à classe que
		passarmos como parâmetro. Dessa forma, podemos calcular o imc para todos os pacientes.
		Adicionalmente, para tornarmos os erros da tabela mais identificáveis, pintaremos as linhas problemáticas com vermelho. Para tal, poderíamos
		usar CSS com paciente.style.color = "<color>" para modificarmos a cor da fonte, ou paciente.style.backgroundColor = "<color>" para modificarmos
		a cor de fundo. Porém, o mais inteligente a se fazer é manter sempre toda e qq info relacionada ao estilo da página no arquivo .css, e portanto
		lá defini a classe paciente-invalido que usamos aqui, chamada através de paciente.classList.add("paciente-invalido");. */

var lista_pacientes = document.querySelectorAll(".paciente");
console.log(lista_pacientes);

for(var i = 0; i < lista_pacientes.length; i++){
	paciente = lista_pacientes[i];
	peso = paciente.querySelector(".info-peso").textContent;
	altura = paciente.querySelector(".info-altura").textContent;
	imc = peso / (altura * altura);
	paciente.querySelector(".info-imc").textContent = imc.toFixed(2);

	pesoEhValido = true;
	alturaEhValida = true;

	if (peso <= 0 || peso >= 1000) {
	    pesoEhValido = false;
			paciente.classList.add("paciente-invalido");
			paciente.querySelector(".info-imc").textContent = "Peso inválido!";
	}
	if (altura <= 0 || altura >= 3.00) {
	    alturaEhValida = false;
			paciente.classList.add("paciente-invalido");
			paciente.querySelector(".info-imc").textContent = "Altura inválida!";
	}

	if (alturaEhValida && pesoEhValido) {
			paciente.querySelector(".info-imc").textContent = imc.toFixed(2);
	}
}
