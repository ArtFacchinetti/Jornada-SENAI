let altura,peso;
function getData(){
    peso = parseFloat(document.getElementById('txtpeso').value);
    altura = parseFloat(document.getElementById('txtaltura').value);

    alert(imc(peso,altura))
}

function imc(peso,altura){
    imc = peso / (altura * altura);
    return imc.toFixed(1)
}



