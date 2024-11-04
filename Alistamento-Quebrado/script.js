function enviar(){
    mostrarP(0);
    const pnome = document.getElementById('pnome').value;
    const snome = document.getElementById('snome').value;

    const sexo = document.getElementsByName('sexo');

    const idade = document.getElementById('idade').value;

    const resultado = document.getElementById('resultado');

    if(pnome === '' || snome === '' || sexo === '' || idade === ''){
        resultado.innerText = 'Todos os campos são obrigatórios!';
    } else if(idade < 18){
        resultado.innerText = 'Somente pessoas maiores de 18 anos podem participar!';
    } else {
        for (let i = 0; i < sexo.length; i++) {
            if(sexo[i].checked && sexo[i].id == 'mulher'){
                mostrarP(1);
            }
        }
        // resultado.innerText = `Nome completo: ${pnome} ${snome} Idade: ${idade} Sexo: ${sexo}`;
    } 
}

function mostrarP(v){
    if(v){
        document.getElementById('obrigatorio').style.display = 'block';
    } else {
        document.getElementById('obrigatorio').style.display = 'none';
    }
}

function mostrarPIdade(v){
    if(v){
        document.getElementById('obrigatorioIdade').style.display = 'block';
    } else {
        document.getElementById('obrigatorioIdade').style.display = 'none';
    }
}

function testarAlistamentoIdade(){
    const idade = document.getElementById('idade').value;

    if(idade < 18){
        mostrarPIdade(1);
    } else {
        mostrarPIdade(0);
    }
}

function testarAlistamento(v){
    const sexo = document.getElementsByName('sexo');

    for (let i = 0; i < sexo.length; i++) {
        if(sexo[i].checked && sexo[i].id == 'mulher'){
            mostrarP(v);
        } else if(sexo[i].checked && sexo[i].id == 'homem') {
            mostrarP(0);
        }
    }
}