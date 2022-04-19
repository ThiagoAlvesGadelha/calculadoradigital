function insert(num){  //ACIONANDO BOTOES COM ONCLICK
    var numero = document.getElementById('resultado').innerHTML; //para acionar onclick
    document.getElementById('resultado').innerHTML = numero + num;
}


function clean(){ //FUNÇÃO PARA LIMPAR ESTA ACIONANDO NO BOTÃO C NO HTML
    document.getElementById('resultado').innerHTML = "";
}

function back(){ //FUNÇÃO BACKSPACE ESTA ACIONADA NO BOTAO ¬
   var resultado = document.getElementById('resultado').innerHTML;
   document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular(){ //CALCULAR TODO VALOR COM O EVAL.
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    }

}