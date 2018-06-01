/* Inserida a estrutura de cadastro no HTML, usamos o conceito de evento para percebermos o click no botão. Para facilitar, inserimos o tratamento
		desse evento numa função, definida através de function. O acesso aos dados de preenchimento do formulário vem por .<label>.value. Para se criar
		novos elementos no HTML, usamos document.createElement("<tipo de tag>"). */
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {

    event.preventDefault(); // Esse comando impede que a página recarregue após click no botão, que é o default.

    // Pegando os valores do formulário.
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemDadosDoFormulario(form);
    console.log(paciente);

    //Validando os dados do paciente.
    var erros = validaPaciente(paciente);
    console.log(erros);
    if(erros.length > 0){
      exibeMensagensDeErro(erros);
      return; //Sai sem inserir o paciente na tabela.
    }

    adicionaPacientesParaTabela(paciente)

    form.reset(); // Apaga os dados preenchidos na tabela.
	});

  function obtemDadosDoFormulario(form) {

    // Assim se cria um objeto em javascript:
    var paciente = {
      nome: form.nome.value,
      peso: form.peso.value,
      altura: form.altura.value,
      gordura: form.gordura.value
    }

    return paciente
}

function criaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    // Criando a linha, os elementos da linha e inserindo neles os dados do formulário.
		var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

		pacienteTr.appendChild(criaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(criaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(criaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(criaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(criaTd(calculaImc(peso,altura), "info-imc"));

    return pacienteTr;
}

function criaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {
    var erros = [];

    if (paciente.nome.length == 0)
        erros.push("O nome não pode ser em branco!");
    if (paciente.gordura.length == 0)
        erros.push("A gordura não pode ser em branco!");
    if (paciente.peso.length == 0)
        erros.push("O peso não pode ser em branco!");
    if (paciente.altura.length == 0)
        erros.push("A altura não pode ser em branco!");
    if (!validaPeso(paciente.peso))
        erros.push("Peso é inválido!"); // Assim se adiciona em um array, com .push().
    if (!validaAltura(paciente.altura))
        erros.push("Altura é inválida!");

    return erros;
}

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = ""; // O innerHTML permite controlar o HTML interno de um elemento, e assim estamos apagando as mensagens de erro antigas.
    erros.forEach(function(erro){ // O forEach percorre todos os elementos.
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function adicionaPacientesParaTabela(paciente) {
  var pacienteTr = criaTr(paciente); // Cria a linha do paciente e a preenche.
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr); // Adicionando a linha, já completa, na tabela.
}
