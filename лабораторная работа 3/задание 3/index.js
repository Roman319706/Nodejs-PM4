const path = require('path');

// запуск: node index.js report.txt
const [, , requestedFile] = process.argv;

if (requestedFile === undefined || requestedFile === '') {
  console.error('Укажите имя файла: node index.js report.txt');
  process.exit(1);
}

console.log(path.join(__dirname, 'files', requestedFile));
