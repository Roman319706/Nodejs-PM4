const chalk = require('chalk');

const lines = [
  chalk.green('Программа запущена'),
  chalk.yellow(process.platform),
  chalk.bold.red('Программа завершена'),
];

lines.forEach((line) => console.log(line));
