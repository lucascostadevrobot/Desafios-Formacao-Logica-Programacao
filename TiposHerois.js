class Heroi{
  constructor(nomeHeroi, idadeHeroi, tipoHeroi){
   this.nomeHeroi =  nomeHeroi;
   this.idadeHeroi = idadeHeroi;
   this.tipoHeroi = tipoHeroi;
   }
   
   //Metodo responsável por operar os tipos de ataque
   atacar(nomeHeroi, idadeHeroi, tipoHeroi){
   let ataque = "";
   
   switch(tipoHeroi){
   case "mago":
    ataque  = "magia";
    break;
   
   
   case "guerreiro":
   ataque = "espada";
    break;
    
   case "monge":
   ataque = "artes marciais";
    break;
    
   case "ninja":
   ataque = "shuriken";
    break;
    
   default:
   console.log("Opss! Aconteceu alguma coisa com o seu ataque.");
   break;
   
       }
       console.log("O "+ tipoHeroi + " atacou usando " + ataque);
   }
      
 }
 
 //Insntanciando objetos e passando valores por parâmetros
 let cadastrandoTipoDeHeroi = new Heroi();
 cadastrandoTipoDeHeroi.atacar("Gandalf", 2999, "mago");
 