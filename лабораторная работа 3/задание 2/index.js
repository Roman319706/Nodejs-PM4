const path = require('path');

const fileLocation = path.join(__dirname, 'data', 'info.txt');
const parsed = path.parse(fileLocation);

console.log('Путь к info.txt:', fileLocation);
console.log('path.parse():', parsed);
