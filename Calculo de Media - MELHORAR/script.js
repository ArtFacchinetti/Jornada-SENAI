function calcular(){


    let nota1, nota2, nota3, resultado;
    
    nota1 = document.getElementById('txtnota1').value;
    nota2 = document.getElementById('txtnota2').value;
    nota3 = document.getElementById('txtnota3').value;
    


    nota1 = Number(nota1);
    nota2 = Number(nota2);
    nota3 = Number(nota3);
    resultado = Number(resultado);

    
    resultado = (nota1 + nota2 + nota3) / 3;

    if  (resultado >= 6)  {
document.getElementById('resultado').textContent = 'Passou de ano'
    }
    
    else {
document.getElementById("resultado").textContent = 'Não passou de ano';



    }
    
    
   
    
  








}