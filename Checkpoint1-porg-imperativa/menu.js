function qualPrato(prato, tempo) {    
    
    switch(prato){
        case 1:
            console.log('Escolheu pipoca');
                if(tempo >= 20){
                    console.log("Comida queimou");
                }
                if(tempo < 10){
                    console.log("Tempo insuficiente");
                }
                if(tempo >= 30){
                    console.log("Kabum!");
                }
                if(tempo == 10){
                    console.log("Prato pronto, bom apetite!!!");
                }        
            break;
        case 2: 
            console.log('Escolheu macarrao');
                if(tempo >= 16){
                    console.log("Comida queimou");
                }
                if(tempo < 8){
                    console.log("Tempo insuficiente");
                }
                if(tempo >= 24){
                    console.log("Kabum!");
                }
                if(tempo == 8){
                    console.log("Prato pronto, bom apetite!!!");
                }
            break;
        case 3: 
            console.log('Escolheu carne');
                if(tempo >= 30){
                    console.log("Comida queimou");
                }
                if(tempo < 15){
                    console.log("Tempo insuficiente");
                }
                if(tempo >= 45){
                    console.log("Kabum!");
                }
                if(tempo == 15){
                    console.log("Prato pronto, bom apetite!!!");
                }
            break;
        case 4: 
            console.log('Escolheu feijao');
                if(tempo >= 30){
                    console.log("Comida queimou");
                }
                if(tempo < 15){
                    console.log("Tempo insuficiente");
                }
                if(tempo >= 45){
                    console.log("Kabum!");
                }
                if(tempo == 15){
                    console.log("Prato pronto, bom apetite!!!");
                }
            break;
        case 5:
            console.log('Escolheu brigadeiro');
                if(tempo >= 8){
                    console.log("Comida queimou");
                }
                if(tempo > 16){
                    console.log("Tempo insuficiente");
                }
                if(tempo <= 24){
                    console.log("Kabum!");
                }
                if(tempo == 8){
                    console.log("Prato pronto, bom apetite!!!");
                }
            break;
        default:
            console.log('Prato Inexistente');
            break;
    }
}

console.log('----AVISO IMPORTANTE----\n escreva o numero do prato\n');
console.log('Escolhe um prato: \n 1-Pipoca \n 2-Macarrao \n 3-Carne \n 4-feijao \n 5-brigadeiro');
qualPrato(6, 10);
