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

	var pesoEhValido = validaPeso(peso);
	var alturaEhValida = validaAltura(altura);

	if (alturaEhValida && pesoEhValido) {
			paciente.querySelector(".info-imc").textContent = imc.toFixed(2);
	}
}

function calculaImc(peso, altura) {
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

function validaPeso(peso){

    if (peso >= 0 && peso <= 1000)
    {
        return true;
    }
    else
    {
      console.log("Peso inválido!");
      pesoEhValido = false;
      paciente.querySelector(".info-imc").textContent = "Peso inválido!";
      paciente.classList.add("paciente-invalido");
      return false;
    }
}

function validaAltura(altura) {

    if (altura >= 0 && altura <= 3.0)
    {
        return true;
    }
    else
    {
      console.log("Altura inválida!");
      alturaEhValida = false;
      paciente.querySelector(".info-imc").textContent = "Altura inválida!";
      paciente.classList.add("paciente-invalido");
      return false;
    }
}
