let inquirer = require('inquirer');
const questions = [
    {
        type : 'input',
        name : 'name',
        message : 'What is yoyr name?',
        validate : (answer)=>{
            if(answer===''){
            return 'please enter your name'
        }
        return true
        }
    },
    {
        type: 'input',
        name: 'height',
        message: 'What is your height?(cm)',
        validate: (answer)=>{
            if(isNaN(answer)){
                return 'please enter your height'
            }
            return true
        } 
    },
    {
        type: 'input',
        name: 'weight',
        message: 'What is your weight?(kg)',
        validate: (answer)=>{
            if(isNaN(answer)){
                return 'please enter your weight'
            }
        return true
        } 
    }
]

console.log('--------------IBM C A L C U L A T O R------------------------')
inquirer
    .prompt(questions)
    .then(answers => {
    
    const height = answers.height/100;
    const weight = answers.weight;
    const bmi = (weight/( height*height));
    const isFloat = (num)=>{
        if(num % 1 !== 0){
            return num.toFixed(2)
        }
    }
    if( bmi < 16 ){
        console.log(`${answers.name} your BMI is ${bmi} and it is considered to be severley underweight`)
    }
    else if( bmi >=16 && bmi <18,5){
        console.log(`${answers.name} your BMI is ${bmi} and it is considered to be underweight`)
    }
    else if( bmi >= 18,5 && bmi <25){
        console.log(`${answers.name} your BMI is ${bmi} and it is considered to be normal`)
    }
    else if( bmi >= 25 && bmi <30){
        console.log(`${answers.name} your BMI is ${bmi} and it is considered to be overweight`)
    }
    else if( bmi >= 30 && bmi <35){
        console.log(`${answers.name} your BMI is ${bmi} and it is considered to be moderately obese`)
    }
    else if( bmi >= 35 && bmi <40){
        console.log(`${answers.name} your BMI is ${bmi} and it is considered to be severley obese`)
    }
    if( bmi > 40 ){
        console.log(`${answers.name} your BMI is ${bmi} and it is considered to be morbidly obese`)
    }
    
    })