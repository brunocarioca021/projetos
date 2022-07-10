console.clear();
const prompt = require('prompt-sync')();
// let nome = prompt("Informe seu nome: ");
// let idade = +prompt("Informe sua idade: ");
// let endereco = prompt("Informe o local onde reside: ");
// console.log();

// console.log(`
//  Olá ${nome} sua idade é ${idade} anos,
//  reside em ${endereco}
//  seus dados são importante no momento da investigação.
// `);

const pergunta1 = prompt("Você hackeou a vítima (WhatsApp, Ligação ou Wi-fi)? [S/N] ").toUpperCase();
const pergunta2 = prompt("Você chegou a usar engenharia social contra a vítima? [S/N] ").toUpperCase();
const pergunta3 = prompt("A localidade que você mora é próxima da vítima? [S/N] ").toUpperCase();
const pergunta4 = prompt("Vocẽ e a vítima já chegaram a trabalhar juntos? [S/N] ").toUpperCase();
const pergunta5 = prompt("O Pendrive Hacker que estava com a vítima é seu? [S/N] ").toUpperCase();
let cont = 0;

if (pergunta1 === "S") 
{
  cont++;
}
if (pergunta2 === "S") 
{
  cont++;
}
if (pergunta3 === "S") 
{
  cont++;
}
if (pergunta4 === "S") 
{
  cont++;
}
if (pergunta5 === "S") 
{
  cont++;
}

// console.log(cont)

if(cont === 2) 
{
  console.log("Humm, Você está sendo considerado suspeito!");
} 
else if (cont === 3 || cont ===4) 
{
  console.log("Opa!!! Temos um cúmplice do crime cibernético!");
} 
else if (cont === 5) 
{
  console.log("Você está preso!!! Você é o cibercriminoso!!!");
} 
else 
{
  console.log("Ok, Obrgado por responder as perguntas, mas você não está envolvido no crime cibernético!");
}