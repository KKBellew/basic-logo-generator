const fs = require('fs');
const inquirer = require('inquirer');
const shapes = require('./shapes'); 

async function generateLogo() {
  const userInput = await inquirer.prompt(/* ... your prompts ... */);
  return userInput;
}

async function run() {
  const userInput = await generateLogo();

  let svg;

  switch (userInput.shape.toLowerCase()) {
    case 'circle':
      svg = shapes.drawCircle({
        fillColor: userInput.shapeColor,
      });
      break;
    case 'triangle':
      svg = shapes.drawTriangle({
        fillColor: userInput.shapeColor,
      });
      break;
    case 'square':
      svg = shapes.drawSquare({
        fillColor: userInput.shapeColor,
      });
      break;
    default:
      console.log('Invalid shape.');
      return;
  }

  const fileName = `${userInput.fileName}.svg`;
  fs.writeFileSync(fileName, svg);
  console.log(`Logo generated and saved to ${fileName}`);
}

run ();
