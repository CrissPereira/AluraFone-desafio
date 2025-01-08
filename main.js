
const ListaDeTeclas = document.querySelectorAll('input[type=button]');
const inputTel = document.querySelector('input[type=tel]');

for(  let contador = 0; contador < ListaDeTeclas.length; contador++ ){//

    const tecla = ListaDeTeclas[contador];

    tecla.onclick = function(){
        inputTel.value = inputTel.value + tecla.value;
    } 
}

  const botões = document.querySelectorAll('.botões');

 for(let contador= 0; contador < botões.length; contador++ ){

    const botão = botões[contador];

    botão.onclick = function () {

        if(botão.classList.contains('limpar')) {
          inputTel.value = "";
        }
    
              

        else if (botão.classList.contains('ligar')){
            alert('LIGAÇÃO FEITA!!!');
        }
    

    }

}