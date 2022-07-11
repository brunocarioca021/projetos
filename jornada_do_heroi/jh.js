//Jogo jornada do heroi

const prompt = require("prompt-sync")();
console.clear();
console.log("SEJA BEM VINDO AO JORNADA DO HERÓI\n");
const nome = prompt("Digite o seu nome: ");
console.clear();
console.log(`Bem-vindo(a) ${nome}!\n.Você é um lutador de MuayThai e precisa se esforçar para ganhar as lutas.\nEntão apenas responda apenas SIM ou NÃO.\n`);

console.log(
  `Você é um lutado de MuayThai e esta se preparando para lutar. Falta alguns dias para a luta, como treinador tem que decidir qual a melhor forma d treinar sem se machucar.\n`
);

const question1 = prompt(
  `É dia de treino no camp, vai correr 50km? (sim/nao)  `
).toLowerCase();
const question2 = prompt(
  `Chegou da corrida, treinamento de clinch? (sim/nao)  `
).toLowerCase();
const question3 = prompt(
  `Terminou o treinamento de clinch, treinar fazendo flexão? (sim/nao)  `
).toLowerCase();
const question4 = prompt(
  `Terminou o treinamento, agora treinar abdominais? (sim/nao)  `
).toLowerCase();
const question5 = prompt(
  `Por último, treinamento tecnico? (sim/nao)  `
).toLowerCase();

let score = 0;
let questions = [question1, question2, question3, question4, question5];
let treinos = ["correr", "clinch", "flexão", "abdominais", "tecnico"];
let semTreinar = [];

for (i = 0; i < questions.length; i++) {
  while (questions[i] != "sim" && questions[i] != "nao")
  
  if (questions[i] == "sim") {
    score++;
  } else {
    semTreinar.push(treinos[i]);
  }
}
if (score == 0) {
  console.log(
    `\nO treino no Muay Thai é essencial para que o lutador esteja mais preparado para enfrentar seus adversários ${semTreinar},e por conta do seu mal desempenho nem se esforçou para seguir em frente.\n `
  );
} else if (score == 1 || score == 2) {
  console.log(
    `\nVocê não treinou suficiente ${semTreinar}.\n`
  );
} else if (score == 3) {
  console.log(
    `\nNo MuayThai requer treino de força ${semTreinar} e a sua luta foi de baixo desempenho e o adversário é mais forte do que você. Caso queira ganhar na próxima luta terá que treinar mais todos os dias.\n `
  );
} else if (score == 4) {
  console.log(
    `\nVocê terminou a luta perdendo ṕor pontuação  por conta do chute que levou e não aguentou. treine mais ${semTreinar}, para aguentar as pancadas.\n`
  );
} else {
  console.log(
    `\nPARABÉNS!! Você é o campẽao.\n`
  );
}

