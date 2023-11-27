const fs = require('fs');
const inquirer = require('inquirer');
const SVGBuilder = require('svg-builder');

async function generateLogo(){

    const userInput= await inquirer.prompt([
        {
            type: 'input',
            message: 'Input up to three letter for your logo.',
            name: 'text',
        },
        {
            type: 'list',
            message: 'What text color would you like?',
            choices: ['Black', 'White','Grey','Blue', 'Yellow', 'Green', 'Pink' ],
            name: 'textColor',
        },
        {
            type: 'input',
            message: 'Enter a color keyword or a hexidecimal number?',
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
            message: 'what color or hexidecimal number for the shape?',
            name: 'shapeColor',
        },
        {    
            type: 'input',
            message: 'Enter a filename for the logo.',
            name: 'fileName',
        },
    ])
}

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

//generate logo
generateLogo();