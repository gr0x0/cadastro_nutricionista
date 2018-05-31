// É importante notar que a execução do script é sequencial, linha a linha.
			
// alert() lança uma mensagem de alerta na tela.
alert("Olá mundo");
// console.log() lança o que receber de parâmetro no console do browser (F12 e aba console).
console.log("Oi Mundo");
/* O DOM, document object model, é a representação do HTML para o javascript, acessível pela palavra reservada 'document'. Tudo que é modificado 
	no document aparece para o usuário via browser. console.log<document> leva para o console (F12, aba console) a estrutura da página para 
	consulta. */
console.log(document);
// Com document.querySelector() podemos procurar por uma tag específica dentro da página.
console.log(document.querySelector("h1"));
// Pode-se capturar valores em variáveis usando var.
var titulo = document.querySelector("h1");
// Elementos da página que tenham texto permitem acesso a ele através de textContent. -->
titulo.textContent = "Banana";
/* Essa forma de modificar valores de texto é ruim uma vez que depende da imutabilidade de h1. No quesito boas práticas de javascript, deve-se 
	utilizar seletores de CSS, declarando classes para os elementos dde html que desejamos manipular de forma a torná-los únicos. A tag h1, agora,
	ficou <h1 class="titulo">Aparecida Nutrição</h1>.
	Para selecionarmos classes CSS com querySelector, utilizamos '.<nome da classe>'. */
var titulo2 = document.querySelector(".titulo");
titulo2.textContent = "Aparecida Nutricionista";			