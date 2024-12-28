import chalk from "chalk"

const nota = 5

if(nota >= 6){
    console.log(chalk.green('Parabéns! Você está aprovado!'))
}else{
    console.log(chalk.red('Você precisa fazer a prova de recuperação!'))
}