// (valor total + 10%) / número de pessoas
function calculoRestaurante1(){
    const taxa = 10 / 100;

    let valorTotal = Number(document.getElementById('restaurante-1-valor-total').value);
    let numeroPessoas = Number(document.getElementById('restaurante-1-numero-de-pessoas').value);

    let resultado = valorTotal != 0 && numeroPessoas != 0 ? (valorTotal + (valorTotal * taxa)) / numeroPessoas : 0
    
    document.getElementById('restaurante-1-resultado').innerText = resultado != 0 ? `R\$${resultado.toFixed(2)}` : 'R$00,00';
}

function calculoRestaurante2(){
    const taxa = 10;

    let valorTotal = Number(document.getElementById('restaurante-2-valor-total').value);

    let couvert = document.getElementById('restaurante-2-couvert').value;

    let resultado = valorTotal != 0 && couvert != 0 ? `${(valorTotal + taxa).toFixed(2)} com Couvert` : valorTotal != 0 ? valorTotal : 0;

    document.getElementById('restaurante-2-resultado').innerText = resultado != 0 ? `R\$${resultado}` : 'R$00,00';
}


function calculoHospedagem(){
    let dias = Number(document.getElementById('hospedagem-dias').value);
    let quarto = document.getElementById('hospedagem-quartos').value;

    let resultado = dias != 0 ? quarto * dias : 0;

    document.getElementById('hospedagem-resultado').innerText = resultado != 0 ? `R\$${resultado}` : 'R$00,00';
}