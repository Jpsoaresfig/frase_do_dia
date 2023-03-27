function dia() {
    var dia_semana = [
      "Comece onde você está, use o que você tem e faça o que você pode.",
      "Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.",
      "Não importa que você vá devagar, contanto que você não pare.",
      "inserir frase aqui",
      "inserir frase aq/2",
    ];
    
      var data_atual = Math.floor(Math.random() * dia_semana.length); //sortear valores pra mostrar
      var getID = document.getElementById("frase-do-dia");
      var frase;
      var valores_sorteados = []; // array para armazenar os valores já sorteados
      
      do {
        var previous_data = data_atual; // serve para armazenar o antigo valor sorteado 
        data_atual = Math.floor(Math.random() * dia_semana.length);
      } while (valores_sorteados.includes(data_atual));// verifica se o valor atual já foi sorteado antes, o include serve para incluir os valores ""
      
      valores_sorteados.push(data_atual); // adiciona o valor atual ao array de valores sorteados
      frase = "A frase do dia é: " + dia_semana[data_atual];
      getID.innerText = frase;
    }