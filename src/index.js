let nomeHeroi = "Lucas da Costa"
let niveisXP = [2.000, 2.001]
if(niveisXP.length > 0){
for(contador of niveisXP){
    switch(contador){
        case 999:
        case 1.000:
            console.log(" O Herói de nome " + nomeHeroi + "está no nível: " + "Ferro");
            break;
    
        case 1.000:
        case 2.000:
            console.log(" O Herói de nome " + nomeHeroi + "está no nível: " + "Bronze");
            break;
        case 2.001:
        case 5.000:
            console.log(" O Herói de nome " + nomeHeroi + "está no nível: " + "Prata");
             break;
        case 5.001:
        case 7.000:
            console.log(" O Herói de nome " + nomeHeroi + "está no nível: " + "Ouro");
             break;
        case 7.001:
        case 8.000:
            console.log(" O Herói de nome " + nomeHeroi + "está no nível: " + "Platina");
             break;
        case  8.001:
        case 9.000:
            console.log(" O Herói de nome " + nomeHeroi + "está no nível: " + "Ascendente");
             break;
        case 9.001:
        case 10.000:
            console.log(" O Herói de nome " + nomeHeroi + "está no nível: " + "Imortal");
              break;
        case 10.001:
            console.log(" O Herói de nome " + nomeHeroi + "está no nível: " + "Radiante");
             break;

        default:
            console.log(" Mensagem padrão se necessário!");


    }      
  }
}else{
    console.log("Você precisa iniciar para sair do nivel zero!")
}
