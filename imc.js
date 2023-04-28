const calcular = document.getElementById('calcular')




function imc (){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== ''){

      const valorIMC = (peso / (altura * altura )).toFixed(1)

        let classificacao = ''

        if( valorIMC < 18.5){
            classificacao = 'abaixo do peso' ;

        }else if (valorIMC < 25){
            classificacao = 'voce esta no peso normal';

        }else if (valorIMC < 30 ){
            classificacao = 'voce esta na obessidade grau I';

        }else if (valorIMC < 35){
            classificacao = ' voce esta obeso';

        }else if (valorIMC < 40){
            classificacao = 'voce esta na obessidade grau II'

        }else{
            classificacao = 'voce esta com obesidade grau III, cuidado!!!'
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e voce esta ${classificacao}`;

         
    }else{
        resultado.textContent = 'preencha todos os campos ';
    }


}

calcular.addEventListener('click', imc)