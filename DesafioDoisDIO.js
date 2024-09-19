//Iniciando o processo chamando a Main
main();

//Função que realiza o calculo da rankeada
function validaRankeadas(vitorias, derrotas){

 let saldoRankeadas = vitorias - derrotas;
 let niveis;
  switch(saldoRankeadas){
   case 0: 
   case 10:
   niveis = "Ferro";
   break;
   
   case 11:
   case 20:
    niveis = "Bronze";
    break;
    
   case 21:
   case 50:
    niveis = "Prata";
    break;
    
   case 51:
   case 80:
    niveis = "Ouro";
    break;
    
   case 81:
   case 90:
    niveis = "Diamante";
    break;
    
   case 91:
   case 100:
    niveis = "Lendario";
    break;
    
   case 101:
    niveis = "Imortal";

    default:
        console.log("Erro no sistema, por favor, reiniciar o mesmo.")
  }
  console.log("O Herói tem um saldo de  " + saldoRankeadas + " que está no nível de " + niveis)
}

//Função principal pora invocar outras funções
function main(){
 var vitoriasInformada = 200;
 var derrotasInformada = 200;
 if(vitoriasInformada >= 0 && derrotasInformada >= 0){
 validaRankeadas(vitoriasInformada, derrotasInformada);
 }else{
   console.log("Por favor, os valores devem ser " +
   "igual a 0 ou acima de 0.");
 }
}