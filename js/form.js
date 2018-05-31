/* Inserida a estrutura de cadastro no HTML, usamos o conceito de evento para percebermos o click no botão. Para facilitar, inserimos o tratamento
		desse evento numa função, definida através de function. O acesso aos dados de preenchimento do formulário vem por .<label>.value. Para se criar
		novos elementos no HTML, usamos document.createElement("<tipo de tag>"). */
document.querySelector("#adicionar-paciente").addEventListener("click", function (){
    event.preventDefault(); // Esse comando impede que a página recarregue após click no botão, que é o default.

    // Pegando os valores do formulário.
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemDadosDoFormulario(form);
    console.log(paciente);

    // Cria a linha do paciente e a preenche
    var pacienteTr = criaTr(paciente);

		// Adicionando a linha, já completa, na tabela.
		var tabela = document.querySelector("#tabela-pacientes");
		tabela.appendChild(pacienteTr);

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
    pacienteTr.appendChild(criaTd(paciente.gordura, "info-gordura");
    pacienteTr.appendChild(criaTd(calculaImc(peso,altura), "info-imc"));

    return pacienteTr;
}

function criaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}
