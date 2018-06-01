var botaoImportar = document.querySelector("#importar-pacientes");

botaoImportar.addEventListener("click", function(){
    console.log("Importando pacientes...");

    /* Para fazer uma requisição a um site externo, usamos o XMLHttpRequest() */
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/paci1111entes");

    xhr.addEventListener("load", function() // O "load" pode ser ouvido quando o XMLHttpRequest termina de carregar dos dados.
    {
      /* Via .responseText, recuperamos os dados armazenados pelo XMLHttpRequest. É importante notar que estes dados são retornados
          no formato JSON (JavaScript Object Notation), que serve para enviar dados pela rede e é facilmente convertido para
          javascript - através do método .parse(). */

        var erroAjax = document.querySelector("#erro-ajax");
        if (xhr.status == 200) // Checando se a conexão com o site externo foi bem sucedida, ou seja, retornou status 200.
        {
          erroAjax.classList.add("invisivel"); // Reiniciando a mensagem de erro para o usuário (ou seja, tornando-a invisível).
          var resposta = xhr.responseText; // Recebendo os dados.
          var paciente = JSON.parse(resposta); // Convertendo JSON para javascript.

          paciente.forEach(function(paciente) {
            adicionaPacientesParaTabela(paciente); // Adiciona os pacientes na tabela iterando por eles, já que têm formato de array.
          });
        }
        else
        {
          erroAjax.classList.remove("invisivel"); // Tornando a mensagem de erro visível para o usuário.
        }
    });

    xhr.send();
});
