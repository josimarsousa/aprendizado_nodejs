// modulos externos
import chalk from 'chalk'
import inquirer from 'inquirer'
import fs from 'fs'


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

    buildAccount()
}

function buildAccount(){
    inquirer.prompt(
        [
          {
            name: 'accountName',
            message: 'Digite um nome para sua conta:'
          }
             
        ]
    ).then((anwser) => {

        const accountName = anwser['accountName']

        console.info(accountName)

        if(!fs.existsSync('accounts')){
            fs.mkdirSync('accounts')
            console.log('Diretorio criado!')
        }

    })
    .catch((err) => console.log(err))
}