// modulos externos
import chalk from 'chalk'
import inquirer from 'inquirer'
import fs from 'fs'
import { error } from 'console'


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
        }else if(action === 'Depositar'){
            Deposit()
        }else if(action === 'Consultar Saldo'){
            getAccountBalance()
        }else if(action === 'Sacar'){
            withDraw()
        }else if(action === 'Sair'){
            console.log(chalk.bgBlue.blackBright('Obrigado por usar o accounts!'))
            process.exit()
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

        if(!fs.existsSync('accounts')){
            fs.mkdirSync('accounts')   
        }

        if(fs.existsSync(`accounts/${accountName}.json`)){
            console.log(chalk.bgRed.black('Esta conta já existe, escolha outro nome.!')
            )
            
            buildAccount()
            return
        }

        fs.writeFileSync(`accounts/${accountName}.json`, '{"balance": 0}', function(err) {
            
            console.log(err)
        }
    )
        console.log(chalk.green('Parabéns!, sua conta foi criada!'))
        Operation()
    })
    .catch((err) => console.log(err))
}

// add an amount to user account
function Deposit(){

    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Qual o nome da sua conta?'
        },
    ])
    .then((anwser) => {
        const accountName = anwser['accountName']

        //verify if account exists
        if(!checkAccount(accountName)){
            return Deposit()
        }

        inquirer.prompt([
            {
                name: 'amount',
                message: 'Quanto você deseja depositar?',
            }
        ]).then((anwser) => {

            const amount = anwser['amount']

            //add amount
            addAmount(accountName, amount)
            Operation()
        }).catch(err => console.log(err))

    })
    .catch(err => console.log(err))
}

//verify an account exists
function checkAccount(accountName){
    
    if(!fs.existsSync(`accounts/${accountName}.json`)){
        console.log(chalk.bgRed.black('Esta consta não existe, escolha outra conta!'))
        return false
    }

    return true
}

function addAmount(accountName, amount){
    const accountData = getAccount(accountName)

    if(!amount){
        console.log(chalk.bgRed.black('Ocorreu um erro, tente mais tarde'))
        return Deposit()
    }

    accountData.balance = parseFloat(amount) + parseFloat(accountData.balance)
    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData),
        console.log(chalk.green(`Foi depositado o valor de R$${amount} a sua conta`))
    )
}

function getAccount(accountName){
    const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
        encoding: 'utf-8',
        flag: 'r'
    })
    return JSON.parse(accountJSON)
}

function getAccountBalance(){
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Qual o nome da sua conta?'
        }
    ]).then((anwser) => {
        
        const accountName = anwser['accountName']

        //verify is account exists
        if(!checkAccount(accountName)){
            return getAccountBalance()
        }

        const accountData = getAccount(accountName)

        console.log(chalk.bgBlue.black(`O saldo da sua conta é: ${accountData.balance}`))

        Operation()

    }).catch((err) => console.log(err))
}

function withDraw(){
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Qual o nome da sua conta?'
        }
    ]).then((anwser) => {
        const accountName = anwser['accountName']

        if(!checkAccount(accountName)){
            return withDraw()
        }

        inquirer.prompt([
            {
                name: 'amount', 
                message: 'Quanto você deseja sacar?'
            }
        ]).then((anwser) => {

            const amount = anwser['amount']

            removeAmount(accountName, amount)
        

        }).catch((error) => console.log(err))


    }).catch((err) => console.log(err))
}

function removeAmount(accountName, amount){

    const accountData = getAccount(accountName)

    if(!amount){
        console.log(chalk.bgRed.black('Ocorreu um erro, tente novamente mais tarde!')
    
        )

        return withDraw()
    }

    if(accountData.balance < amount){
        console.log(chalk.bgRed.black('Valor indisponível!'))
        return withDraw()
    }

    accountData.balance = parseFloat(accountData.balance) - parseFloat(amount)
    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData),
        function (err){
            console.log(err)
        }
    )
    console.log(chalk.green(`Foi realizado um saque de R$${amount} na sua conta`))
    Operation()
}