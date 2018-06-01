var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event){
  /* Através do event.target, descobrimos precisamente quem sofreu o evento. Com parentNode, recuperamos o pai do elemento, que
      nesse caso é a linha inteira na forma da tag tr, que é o que desejamos remover. */
    event.target.parentNode.classList.add("fadeOut"); // Esse é um pequeno efeito visual que usa uma classe criada no CSS.

    if (event.target.tagName == 'TD') // Somente executará nosso código caso o elemento em que clicamos seja um <td>
      setTimeout(function() // Fazemos a remoção efetiva da linha esperar o fim do efeito visual.
      {
            event.target.parentNode.remove();
      }, 500);
    });
