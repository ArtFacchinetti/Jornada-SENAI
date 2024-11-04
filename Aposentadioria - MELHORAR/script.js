function verificar(){
    const sexo = document.getElementById('sexo').value
    const idade = Number(document.getElementById('idade').value)
    const contri = Number(document.getElementById('contri').value)

    if (sexo == 'feminino'){
        if(contri >= 15 && idade >= 62){
            alertar('Pode se aposentar')
        }else {
            alertar('Não pode se aposentar')
        }
    }else {
        if(contri >= 15 && idade >= 65){
            alertar('Pode se aposentar')
        }else {
            alertar('Não pode se aposentar')
        }
    }
}

function alertar(t) {
    alert(t)
}