import  inquirer from 'inquirer'

inquirer.prompt([
    {
        name: 'p1',
        message: 'Qual foi a nota 1 ?'
    },
    {
        name: 'p2',
        message: 'Qual foi a nota 2 ?'
    }
])
.then((answers) => {
    console.log(answers)
    const media = (parseInt(answers.p1) + parseInt(answers.p2)) / 2
    console.log(`A média das notas são: ${media}`)
})
.catch((err) => console.log(err))