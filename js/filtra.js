var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0){
        for (var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var nome = paciente.querySelector(".info-nome").textContent;
            var expressao = new RegExp(this.value, "i"); // Expressão regular para buscar letra por letra digitada.

            /* O método .test() das expressões regulares serve justamente para comparar a expressão com a string recebida como
                parâmetro. Se a string contiver a expressão, o retorno é true. */
            if (!expressao.test(nome)) // Compara o digitado ao nome em cada linha.
            {
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel"); // Retorna todos a serem visíveis caso nada seja digitado no filtro.
        }
    }
});
