const fs = require('fs');
const inquirer = require('inquirer');
const SVGBuilder = require('svg-builder');
const shapes = require('inquirer');

async function generateLogo(){

    const userInput= await inquirer.prompt([
        {
            type: 'input',
            message: 'Input up to three letter for your logo.',
            name: 'text',
        },
        {
            type: 'input',
            message: 'Enter a color or a hexidecimal number?',
            name: 'color',
        },
        {
            type: 'list',
            message: 'Pick a shape.',
            choices: ['Circle', 'triangle', 'Square'],
            name: 'shape',
        },
        {    
            type: 'input',
            message: 'Input a color or hexidecimal number for the shape?',
            name: 'shapeColor',
        },
        {    
            type: 'input',
            message: 'Enter a filename for the logo.',
            name: 'fileName',
        },
    ]);

    return userInput;
}

async function run(){
    const userInput = await generateLogo();

//generate logo
    const svg = new SVGBuilder({
        height:150, 
        width: 150, 
    })

.setFillColor(userInput.shapeColor)
.drawShape(userInput.shape.toLowerCase())
.setText(userInput.text)
.build();

//save file (SVG)

const fileName = `${userInput.fileName}.svg`;
fs.writeFileSync(fileName, svg);
console.log(`Logo generated and saved to ${fileName}`);
}

//generate logo
run();