// modulos externos
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
    ]).then().catch((err) => console.log(err))
}

