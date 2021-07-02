/*Checkpoint Programação Imperativa - 02.07.2021 - Alessandra Silva Lopes - Turma - 02
Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado. Veja abaixo os requisitos do projeto:
- Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 
1 - Macarrão – 10 segundos (padrão);
2 - Macarrão – 8 segundos (padrão);
3 - Carne – 15 segundos (padrão);
4 - Feijão – 12 segundos (padrão);
5 - Brigadeiro – 8 segundos (padrão); 
- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!". */

/*Pseudo-código: 
1. Estrutura provavelmente switch-case
2. Geração de valores padrão
3. Aninhar um "if" dentro de cada caso para validar o tempo digitado pelo user*/

function microondas(comida, t) {
    //validando o prato e o tempo
    switch (comida) {
        case "pipoca":
        tempoPadrao = 10
        break;

        case "macarrão":
        tempoPadrao = 8
        break;

        case "carne":
        tempoPadrao = 15
        break;

        case "feijão":
        tempoPadrao = 12
        break;

        case "brigadeiro":
        tempoPadrao = 8
        break

        default: 
        console.log("Prato Inexistente!")
        return
    }
    //teste condicional dos parâmetros recebidos
    if(t < tempoPadrao){
        console.log("Tempo insuficiente!")
    }
    if(t >= tempoPadrao*2 && t < tempoPadrao*3){
        console.log("Sua comida queimou!")
    }
    if(t >= tempoPadrao*3){
        console.log("KABUMMM!")
    }
    else if(t >= tempoPadrao && t < tempoPadrao*2){
        console.log("Prato pronto, bom apetite!")
    }
}

//chamada da função:
microondas("carne", 46);