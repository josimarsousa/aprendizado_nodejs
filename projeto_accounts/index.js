// modulos externos
import chalk from 'chalk'
import inquirer from 'inquirer'


Operation()

function Operation(){
    inquirer
        .prompt([{
            type:'list',
            name: 'action',
            message: 'O que você deseja? ',
            choices: [
                'Criar conta', 
                'Consultar Saldo',
                'Depositar',
                'Sacar',
                'Sair'
        ],
      },
    ]).then((anwser) => {
        const action = anwser['action']
        if(action === 'Criar conta'){
            createAccount()
        }
    })
    .catch((err) => console.log(err))
}

//create account

function createAccount(){
    console.log(chalk.bgGreen.black("Parabéns por escolher nosso banco!"))
    console.log(chalk.green('Defina as opções da sua conta'))
}

