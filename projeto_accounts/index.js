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
    ]).then((anwser) => {
        const action = anwser['action']
        console.log(action)
    })
    .catch((err) => console.log(err))
}

