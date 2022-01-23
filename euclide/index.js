const fs = require('fs');
const processPath = process.cwd();
const fileLogName = 'log.txt';

console.writeLog = (text) => {
  const timeLog = new Date().toJSON();
  text = `TIME: ${timeLog} - LOG: ${text}\n`;
  try {
    fs.writeFileSync(`${processPath}\\${fileLogName}`, text, { flag: 'a+' });
  } catch (err) {
    console.error('Write log error', err);
  }
}

const main = () => {
    const args = process.argv.slice(2);
    console.writeLog(`Start main function: args ${JSON.stringify(args)}`);
    const result = ucln(args[0], args[1]);
    console.log(result);
    console.writeLog(result);
    console.writeLog(`End main function: args ${JSON.stringify(args)}`);
}

const ucln = (a, b) => {
  let numberA = parseInt(a);
  let numberB = parseInt(b);
  while(numberA != numberB){
    if (numberA > numberB) {
      numberA = numberA - numberB;
      continue;
    }
    else{
      numberB = numberB - numberA;
      continue;
    }
  }
  return numberA;
}

main();

