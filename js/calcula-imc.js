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

function calculaImc(peso, altura) {
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}
